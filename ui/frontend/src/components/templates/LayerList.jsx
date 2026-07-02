import { useCallback, useEffect, useRef, useState } from "react";

function LayerGrip() {
  return (
    <svg className="ps-layer-grip-icon" viewBox="0 0 10 16" fill="currentColor" aria-hidden="true">
      <circle cx="2.5" cy="2.5" r="1.1" />
      <circle cx="7.5" cy="2.5" r="1.1" />
      <circle cx="2.5" cy="8" r="1.1" />
      <circle cx="7.5" cy="8" r="1.1" />
      <circle cx="2.5" cy="13.5" r="1.1" />
      <circle cx="7.5" cy="13.5" r="1.1" />
    </svg>
  );
}

function LayerRowContent({ layer, activeId, onSelect, onToggleVisible, isGhost }) {
  return (
    <>
      <span className={`ps-layer-grip ${isGhost ? "ghost" : ""}`} aria-hidden={isGhost}>
        <LayerGrip />
      </span>
      <button
        type="button"
        className={`ps-layer-item ${activeId === layer.id ? "active" : ""}`}
        onClick={isGhost ? undefined : () => onSelect(layer.id)}
        tabIndex={isGhost ? -1 : 0}
      >
        <span
          className={`ps-eye ${layer.visible !== false ? "on" : "off"}`}
          onClick={
            isGhost
              ? undefined
              : (e) => {
                  e.stopPropagation();
                  onToggleVisible(layer.id, layer.visible !== false);
                }
          }
          onKeyDown={() => {}}
          role="button"
          tabIndex={isGhost ? -1 : 0}
          title={layer.visible !== false ? "Hide layer" : "Show layer"}
        />
        <span className="ps-layer-name">{layer.label}</span>
        {layer.locked && <span className="ps-lock-badge">L</span>}
      </button>
    </>
  );
}

function computeInsertAt(clientY, dragId, layers, rowRefs) {
  const visible = layers.filter((l) => l.id !== dragId);
  for (let i = 0; i < visible.length; i++) {
    const row = rowRefs.current[visible[i].id];
    if (!row) continue;
    const rect = row.getBoundingClientRect();
    if (clientY < rect.top + rect.height / 2) return i;
  }
  return visible.length;
}

export default function LayerList({ layers, activeId, onSelect, onReorder, onToggleVisible }) {
  const [drag, setDrag] = useState(null);
  const listRef = useRef(null);
  const rowRefs = useRef({});
  const insertAtRef = useRef(0);
  const startInsertRef = useRef(0);
  const dragIdRef = useRef(null);

  const finishDrag = useCallback(() => {
    const id = dragIdRef.current;
    const startAt = startInsertRef.current;
    if (id != null && insertAtRef.current !== startAt) {
      onReorder(id, insertAtRef.current);
    }
    dragIdRef.current = null;
    insertAtRef.current = 0;
    startInsertRef.current = 0;
    setDrag(null);
    document.body.classList.remove("ps-layer-sorting");
  }, [onReorder]);

  useEffect(() => {
    if (!drag) return undefined;

    const onMove = (e) => {
      const insertAt = computeInsertAt(e.clientY, drag.id, layers, rowRefs);
      insertAtRef.current = insertAt;
      setDrag((prev) => {
        if (!prev) return prev;
        if (prev.insertAt === insertAt && prev.ghostY === e.clientY - prev.offsetY) return prev;
        return {
          ...prev,
          insertAt,
          ghostY: e.clientY - prev.offsetY,
        };
      });
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", finishDrag);
    window.addEventListener("pointercancel", finishDrag);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", finishDrag);
      window.removeEventListener("pointercancel", finishDrag);
    };
  }, [drag, layers, finishDrag]);

  function startGripDrag(e, layer) {
    e.preventDefault();
    e.stopPropagation();

    const row = e.currentTarget.closest(".ps-layer-row");
    const list = listRef.current;
    if (!row || !list) return;

    const rowRect = row.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    const insertAt = computeInsertAt(e.clientY, layer.id, layers, rowRefs);

    e.currentTarget.setPointerCapture(e.pointerId);

    dragIdRef.current = layer.id;
    insertAtRef.current = insertAt;
    startInsertRef.current = insertAt;
    document.body.classList.add("ps-layer-sorting");

    setDrag({
      id: layer.id,
      layer,
      offsetY: e.clientY - rowRect.top,
      width: listRect.width - 8,
      height: rowRect.height,
      ghostX: listRect.left + 4,
      ghostY: rowRect.top,
      insertAt,
      pointerId: e.pointerId,
    });
  }

  const draggedLayer = drag ? layers.find((l) => l.id === drag.id) : null;
  const visibleLayers = drag ? layers.filter((l) => l.id !== drag.id) : layers;

  const listItems = [];
  for (let i = 0; i <= visibleLayers.length; i++) {
    if (drag && drag.insertAt === i) {
      listItems.push(
        <li
          key="placeholder"
          className="ps-layer-placeholder"
          style={{ height: drag.height }}
          aria-hidden
        />
      );
    }
    if (i < visibleLayers.length) {
      const s = visibleLayers[i];
      listItems.push(
        <li
          key={s.id}
          ref={(el) => {
            rowRefs.current[s.id] = el;
          }}
          data-layer-id={s.id}
          className={["ps-layer-row", drag ? "ps-layer-row-shifting" : ""].filter(Boolean).join(" ")}
        >
          <button
            type="button"
            className="ps-layer-grip"
            aria-label={`Reorder ${s.label}`}
            onPointerDown={(ev) => startGripDrag(ev, s)}
          >
            <LayerGrip />
          </button>
          <button
            type="button"
            className={`ps-layer-item ${activeId === s.id ? "active" : ""}`}
            onClick={() => onSelect(s.id)}
          >
            <span
              className={`ps-eye ${s.visible !== false ? "on" : "off"}`}
              onClick={(ev) => {
                ev.stopPropagation();
                onToggleVisible(s.id, s.visible !== false);
              }}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
              title={s.visible !== false ? "Hide layer" : "Show layer"}
            />
            <span className="ps-layer-name">{s.label}</span>
            {s.locked && <span className="ps-lock-badge">L</span>}
          </button>
        </li>
      );
    }
  }

  return (
    <>
      <ul ref={listRef} className={`ps-layer-list ${drag ? "is-sorting" : ""}`}>
        {listItems}
      </ul>

      {drag && draggedLayer && (
        <div
          className="ps-layer-ghost"
          style={{
            left: drag.ghostX,
            top: drag.ghostY,
            width: drag.width,
            minHeight: drag.height,
          }}
          aria-hidden
        >
          <LayerRowContent
            layer={draggedLayer}
            activeId={activeId}
            onSelect={onSelect}
            onToggleVisible={onToggleVisible}
            isGhost
          />
        </div>
      )}
    </>
  );
}
