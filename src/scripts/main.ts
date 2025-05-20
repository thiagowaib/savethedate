const confirmButton = document.getElementById("confirmButton")!;
const modal = document.getElementById("confirmationModal")!;
const closeModal = document.getElementById("closeModal")!;
const submitBtn = document.getElementById("submitConfirmation")!;
const nameInput = document.getElementById("nameInput") as HTMLInputElement;

confirmButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

submitBtn.addEventListener("click", async () => {
  const name = nameInput.value.trim();
  if (!name) {
    alert("Por favor, insira um nome.");
    return;
  }

  try {
    const response = await fetch("https://mapi-kw50.onrender.com/confirmation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth": "9f6a6095bc6158b2b189eb009fe6b44d"
        },
        body: JSON.stringify({
            name
        })
    });

    if (response.ok) {
      alert("Presença confirmada com sucesso!");
      modal.classList.add("hidden");
      nameInput.value = "";
    } else {
      alert("Erro ao confirmar presença.");
    }
  } catch (error) {
    alert("Erro de rede. Tente novamente.");
  }
});
