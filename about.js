
document.querySelectorAll(".name").forEach((element, index) => {
            element.addEventListener("click", function () {
                var historyDiv = document.querySelectorAll(".history")[index];
                if (historyDiv.style.display === "none") {
                    historyDiv.style.display = "block";
                    element.textContent = "Masquer l’histoire";
                } else {
                    historyDiv.style.display = "none";
                    element.textContent = "Afficher l’histoire";
                }
            });
        });