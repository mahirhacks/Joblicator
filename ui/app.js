const form = document.getElementById("job-form");
const submitBtn = document.getElementById("submit-btn");
const toast = document.getElementById("toast");
const storageHint = document.getElementById("storage-hint");

let toastTimer = null;

async function loadStorageHint() {
  try {
    const response = await fetch("/api/config");
    const data = await response.json();
    storageHint.innerHTML =
      `Paste a job posting — it gets saved directly to <code>${data.json}</code>`;
  } catch {
    storageHint.textContent = "Could not load storage config from server.";
  }
}

function showToast(message, type = "success") {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  toast.hidden = false;

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    toast.hidden = true;
  }, 3500);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const company = form.company.value;
  const title = form.title.value;
  const location = form.location.value;
  const url = form.url.value;
  const about = form.about.value;
  const description = form.description.value;

  if (!company.trim() || !title.trim()) {
    showToast("Please fill in company and title.", "error");
    return;
  }

  if (!about.trim() && !description.trim()) {
    showToast("Please fill in About or Description.", "error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Saving…";

  try {
    const response = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, title, location, url, about, description }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || "Failed to save application.");
    }

    showToast(
      data.json_count
        ? `Saved ${company.trim()} — ${title.trim()} (${data.json_count} in ${data.json})`
        : `Saved ${company.trim()} — ${title.trim()}`
    );
    form.reset();
  } catch (err) {
    showToast(err.message || "Could not reach the server.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Save application";
  }
});

loadStorageHint();
