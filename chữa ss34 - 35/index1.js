let currentStep = 1;

const updateButtons = () => {
  document.getElementById("prevBtn").disabled = currentStep === 1;
  document.getElementById("nextBtn").disabled = currentStep === 4;
};

const updateSteps = () => {
  for (let i = 1; i <= 4; i++) {
    const stepEl = document.getElementById(`step${i}`);
    if (i <= currentStep) {
      stepEl.classList.add("active");
    } else {
      stepEl.classList.remove("active");
    }
  }
};

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateSteps();
    updateButtons();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentStep < 4) {
    currentStep++;
    updateSteps();
    updateButtons();
  }
});

updateButtons();
updateSteps();
