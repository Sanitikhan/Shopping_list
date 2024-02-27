# PROMESSES
``` js
    let promesse = new Promise((resolve, reject) => {
        // Simulation d'une tâche asynchrone
        let condition = true;
        if (condition) {
            setTimeout(() => resolve("Opération réussie"), 1000);
        } else {
            reject("Opération échouée");
        }
    });
```