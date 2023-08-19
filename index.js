function toggleField(id1, id2) {

    console.log(`Entered toggleField() with ${id1} controller and ${id2} Revealer`);
    const checkedField = document.getElementById(id1);
    const revealedField = document.getElementById(id2);
    
    if (checkedField.checked) {
        revealedField.style.display = "block";
    } else {
        revealedField.style.display = "none";
    }
}