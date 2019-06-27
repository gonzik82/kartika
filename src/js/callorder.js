window.callorder = (form) => {

  const formData = new FormData(form);
  const data = processForm(formData);
  console.log(data);


  $(".thanks-call").addClass("thanks-call--show");
  $(".thanks-call__wrapper").addClass("thanks-call__wrapper--show");
}

const processForm = (data) => {
  const entry = {
    [`user-name`]: String,
    [`phone-number`]: String,
    [`user-mail`]: String,
    [`check-politik`]:Boolean,
  };
  for (const pair of data.entries()) {
    let [property, value] = pair;
    entry[property] = value;
  }
  return entry;
};
