const testimonial = [
  {
    name: "cherise G",
    photoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    text: " I have been using apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
  },
  {
    name: "marvin G",
    photoUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxtb2RlfGVufDB8fHx8MTY4OTU2OTE0OA&ixlib=rb-4.0.3&q=80&w=400",

    text: "apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money.",
  },
  {
    name: "joseph G",
    photoUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "If you are a business owner, and you don't have apple in your toolkit just yet, I highly recommend that you check it out.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonial[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonial.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
