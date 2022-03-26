let counter = 0;

const btns = document.querySelectorAll('.btn');
const value = document.querySelector('.value');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
      const styles = e.currentTarget.classList;

      if (styles.contains('-')){
          counter--;
      }else if (styles.contains('+')){
          counter++;
      }else{
          counter=0;
      }

      if (counter > 0){
          value.style.color = "#f9e1ea"
      }

      if (counter < 0){
          value.style.color = "#f9e1ea"
      }

      if (counter === 0){
          value.style.color = "aliceblue"
      }
      value.innerHTML = counter;
  })
})