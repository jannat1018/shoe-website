const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/shoe(4).png",
            },
            {
                code: "darkblue",
                img: "./img/shoe(7).png",
            },
        ],
    },
{
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
        {
            code: "lightgray",
            img: ""
        }
    ]
}
]













menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});




