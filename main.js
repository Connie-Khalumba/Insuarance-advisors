$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Function to collect form data and send it to Firestore
async function handleSelectCover(cardId) {
  // Collect data from form fields
  const outpatientCoverType = document.querySelector(`#outpatient-cover-type`)?.value;
  const outpatientLimit = document.querySelector(`#outpatient-limit`)?.value;
  const maternityLimit = document.querySelector(`#maternity-limit`)?.value;
  const dentalCoverType = document.querySelector(`#dental-cover-type`)?.value;
  const dentalLimit = document.querySelector(`#dental-limit`)?.value;
  const opticalCoverType = document.querySelector(`#optical-cover-type`)?.value;
  const opticalLimit = document.querySelector(`#optical-limit`)?.value;

  // Ensure data is not empty before submitting
  const data = {
    outpatientCoverType: outpatientCoverType || '',
    outpatientLimit: outpatientLimit || 0,
    maternityLimit: maternityLimit || 0,
    dentalCoverType: dentalCoverType || '',
    dentalLimit: dentalLimit || 0,
    opticalCoverType: opticalCoverType || '',
    opticalLimit: opticalLimit || 0,
    cardId
  };
  const db = getFirestore()

  // Only submit if required fields are filled
  if (outpatientCoverType && outpatientLimit !== undefined) {
    try {
      await addDoc(collection(db, "insuranceCovers"), data);
      alert('Cover details saved successfully!');
      
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  } else {
    alert('Please fill in the required fields.');
  }
}

// Add event listener to the button
document.querySelector('.btn-select-cover').addEventListener('click', function() {
  const cardId = this.getAttribute('data-card-id');
  handleSelectCover(cardId);
});

  
  