export class AlertError {
  
  validation(alert) {
    alert.classList.remove('none');
    alert.textContent = "Complete all the fields!";

    setTimeout( function() {
      alert.classList.add('none');
    }, 2500);
  };

  validationModal(alertInputTitle, alertInputDescription) {

    if (alertInputTitle.value === '' && alertInputDescription.value === '') {

      alertInputTitle.classList.add('modal--input_alert');
      alertInputDescription.classList.add('modal--input_alert');
      setTimeout( function() {
        alertInputTitle.classList.remove('modal--input_alert');
        alertInputDescription.classList.remove('modal--input_alert');
      }, 1500);

    } else if (alertInputTitle.value === '') {

      alertInputTitle.classList.add('modal--input_alert');
      setTimeout( function() {
        alertInputTitle.classList.remove('modal--input_alert');
      }, 1500);

    } else if (alertInputDescription.value === '') {

      alertInputDescription.classList.add('modal--input_alert');
      setTimeout( function() {
        alertInputDescription.classList.remove('modal--input_alert');
      }, 1500);
    };
  };
};