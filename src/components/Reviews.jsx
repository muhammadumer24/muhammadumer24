import "../assets/styles/Reviews.css";


const reviews = [
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "Umer has a huge expertise in coding. \nAnd always give explanations, so I get understand the perimeter of the problem.\nI strongly recommend him. I have worked with him on 20 orders, so you can see that I am very satisfied.",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "hhjj84",
        "rating": "5",
        "review": "Perfect Service!",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1c4e851652855b10ffc8ba563a3e642e-1778248249835/b52fdef1-a76c-4b5a-be3b-75d380f3a08b.png"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "Very good work.\nAnd optimisation of the response time.\nThe technical answers to my questions were also very clear.",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "nick20141234",
        "rating": "5",
        "review": "Exceptional Work & Seamless Collaboration\n\nUmer was a lifesaver! I reached out with a tricky issue in a browser extension, and he jumped in with clarity, precision, and real technical insight. Not only did he diagnose the problem quickly, but he also walked me through the fix with patience and professionalism.... See more",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/93d3625718527fd1162893efdd838e52-1720037997045/1a406bbb-4e60-4ca3-8fc1-5da851069029.png"
    },
    {
        "name": "andrealarentis8",
        "rating": "5",
        "review": "Thanks. What i've expected.",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/07df9cf4d80e6881a7f256ee177fb85f-1665480337269/821de5ec-8c62-40ae-8a8c-9dc5ce50072c.png"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "Very good work. Very good communication.\nAnd delivered in advance!",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "Very good delivery, and high level of cooperation.\nWhen I work with Umer and his team, I know it will be a no-stress project.",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "Great work, as usual.\n",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "abdulali284",
        "rating": "5",
        "review": "The developer is profissional and i advice others to work with him",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b591dcffc6294fa0337b75f2e78c2634-1584093256855/78bf0d5d-4199-4bb8-a4b1-4c528a821da0.jpg"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "Very good work, as usual.\n",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "adnan9020",
        "rating": "5",
        "review": "Umer Farooq truly EXCELLED in delivering high-quality work with his outstanding code expertise and professional approach! 😊 It was a pleasure working with him due to his quick responsiveness, making the entire process seamless. Highly recommend Umer for any software development needs!",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7c3ccfddca256d02313907f249ac8912-1743712914485/40fef479-a920-4f68-b62d-b6a5deec56da.jpeg"
    },
    {
        "name": "rikeditech",
        "rating": "5",
        "review": "it was Nice to work with him",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png"
    },
    {
        "name": "tengage",
        "rating": "5",
        "review": "Awesome to work with him as always, 10 out of 10 developer!! ",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "Thank you VERY much.\nI really appreciate that you worked by night to develop this solution.",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "As usual, very good work.\nAnd always a great level of listening and communication.",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "blaiselavandero",
        "rating": "5",
        "review": "I just wanted to take a moment to say thank you for your incredible support in improving my Chrome extension and helping me publish it successfully! Your expertise and proactive approach made the entire process so much smoother, and I truly appreciate the way you tackled each challenge with enthusiasm... See more",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7bbefd2044332b6919964576e7ee40f8-1687210581491/0ac3cf7a-8ce4-492d-b039-797d97b5cd00.jpg"
    },
    {
        "name": "tengage",
        "rating": "5",
        "review": "exception as always!",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "Umer Farooq was always very available. \nHe even connected remotely to my computer to check a specific problem.\nI like his high level of cooperation, and the good quality of his deliveries.\n\nDEFINITELY A GOOD CHOICE.",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "tengage",
        "rating": "4.7",
        "review": "Excellent time working with him! Really glad to work with him on this order and to make sure we got everything done. High quality, and excellent work from him! ",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "Thank you. It worked perfectly from the first time.",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "tengage",
        "rating": "5",
        "review": "Absolutely fantastic work from this seller, incredibly polite, fast and overall cannot wait to work with him more often. Great chap and gladt to know him now for all future coding tasks ",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
    },
    {
        "name": "hustlesupply",
        "rating": "5",
        "review": "Umer made sure that I was 100% satisfied with the final version of the work. We went back and forth with a few tweaks, but I finally got exactly what I needed. Happy with my purchase ",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/0a02a7a924f0a57674ed50c7d5362ec7-1659260780171/1e7e8755-6add-4864-9698-bc55b146b4c1.png"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "As usual, very good work.\n\nSince we work remotely, communication is paramount. And Umer's communication level is very high. \nHe also gives quick answers to all my questions.\nIf you want something to be done correctly (with no bugs) and on time, just ask Umer!",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "charliebrown232",
        "rating": "5",
        "review": "Umer Farooq delivered exceptional results, exceeding all expectations with professional and bug-free work. Working with him was a breeze due to his quick responsiveness. Highly recommend! 👍",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/748854dd830709f18d255e435873d778-1612531934027/4feb92b8-9196-4274-b804-6f0ba2642ef4.jpg"
    },
    {
        "name": "ecomm_agency",
        "rating": "5",
        "review": "I asked Umer Farooq to develop a complicated chrome extension.\nUmer has his own Development Team. He is also a project Manager.\nFirst, he selected a good environment to develop my extension (which is a very good starting point).\nwhat I particularly like is that he understands the requirements immediately.... See more",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5184dfa8c8cc030fc1cce1a5e12d9330-1666729521399/2a51bda0-96db-4d11-8be3-a837a89c9e87.jpg"
    },
    {
        "name": "defuze",
        "rating": "5",
        "review": "Easy to work with, and fixed all the bugs I found. Thanks!",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/9258821/original/1454796_434063866699760_1306759465_n-2.jpg"
    },
    {
        "name": "defuze",
        "rating": "5",
        "review": "Yazan delivered exceptional work that exceeded expectations with top-notch documentation and professional quality. He was very polite and delivered on time, consistently going above and beyond. Truly a pleasure to work with! 👌",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/9258821/original/1454796_434063866699760_1306759465_n-2.jpg"
    },
    {
        "name": "isa__shahid",
        "rating": "5",
        "review": "amazing working with him, very professional. ",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f5-1f1f0.png"
    },
    {
        "name": "huyt_mann",
        "rating": "4.7",
        "review": "Excellent turn around time",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/805699/original/Juno_Eclipse.jpg"
    },
    {
        "name": "jiriblabla0",
        "rating": "5",
        "review": "Great cooperation. Despite the challenging conditions, Yazan was able to create a properly functioning google extension. I am very happy to have used his services and recommend them to everyone. Quick communication and professional approach.",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ff.png"
    },
    {
        "name": "meitarleibovich",
        "rating": "5",
        "review": "AmaIng work! He managed to do some code anonation that other developers couldnt do!",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png"
    },
    {
        "name": "acnhmart334",
        "rating": "5",
        "review": "This is the second time I’ve had Yazan develop an extension for me, and once again, everything works perfectly. After explaining my requirements, Yazan quickly grasped what I needed, created a detailed list of my requests, and double-checked everything with me before starting the development process. I’m extremely satisfied with the results.",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png"
    },
    {
        "name": "tamasoros",
        "rating": "5",
        "review": "It was a pleasure to work with Yazan. Good communication, and I've got what I expected. ",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c0cef244e8fbc3a1237efd44c8955861-1636555755173/37bdb5d8-f3b4-4260-adc9-8e4d03324010.jpg"
    },
    {
        "name": "nick20141234",
        "rating": "5",
        "review": "Wow what a wonderful experience.  Thanks again for all your hard work and quick delivery!",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/93d3625718527fd1162893efdd838e52-1720037997045/1a406bbb-4e60-4ca3-8fc1-5da851069029.png"
    },
    {
        "name": "meitarleibovich",
        "rating": "5",
        "review": "He did a great job and was nice. I will approach him on the next projects for sure.",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png"
    },
    {
        "name": "nick20141234",
        "rating": "5",
        "review": "Was a pleasure working with you again.  You delivered my extension with lightening fast-speed and I am thoroughly satisfied with my order.  Looking forward to working with you again.  Thanks so much for your work and efforts and dedication!",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/93d3625718527fd1162893efdd838e52-1720037997045/1a406bbb-4e60-4ca3-8fc1-5da851069029.png"
    },
    {
        "name": "nick20141234",
        "rating": "5",
        "review": "It was my deepest pleasure working with this gentleman.  He delivered everything I needed for my custom extension and did it very quickly.  I would highly recommend working with him and I am completely satisfied with my order.  Thank you very much!",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/93d3625718527fd1162893efdd838e52-1720037997045/1a406bbb-4e60-4ca3-8fc1-5da851069029.png"
    },
    {
        "name": "acnhmart334",
        "rating": "5",
        "review": "I'm really glad I found Yazan. He went above and beyond to develop the perfect Chrome extension for me. He thoroughly explained how the extension would work, offered valuable suggestions, and delivered the order ahead of schedule. I would definitely work with him again!",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png"
    },
    {
        "name": "salwan_allahham",
        "rating": "5",
        "review": "it was a pleasure to work with him.he is so kind and respects his customers and tries to give all his best to achieve all the requirements that the customer needs.\nthe time of responding was good, and he tried to answer me ASAP.\nhe was also available after the delivery to get any question. \nI recommend highly working him 👏 ",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
    },
    {
        "name": "blaiselavandero",
        "rating": "5",
        "review": "Yazan is an exceptional talent, and I couldn't be more pleased with his work. He follows instructions meticulously, and the results have been outstanding. I am excited to continue collaborating with him on future projects.",
        "picture": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7bbefd2044332b6919964576e7ee40f8-1687210581491/0ac3cf7a-8ce4-492d-b039-797d97b5cd00.jpg"
    },
    {
        "name": "sprabreu",
        "rating": "5",
        "review": "Eu tive o prazer de trabalhar com um freelancer incrível no Fiverr para desenvolver uma extensão do Chrome, e a experiência foi excepcional do início ao fim. Gostaria de compartilhar minha experiência, destacando quatro áreas principais: Documentação, Expertise em Código, Comunicação Proativa e Compreensão... See more",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f5-1f1f9.png"
    },
    {
        "name": "mateenzaheer",
        "rating": "5",
        "review": "It was a pleasure working with Yazan. Really loved the end product and his attention to detail was awesome.His service really encouraged me to buy more services from fiverr. Definitely will look forward to work with you in the future.",
        "picture": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f5-1f1f0.png"
    }
]

const Reviews = () => {
    return (
        <section className="reviews-section" id="reviews">
            <h2 className="reviews-title">Client Reviews</h2>

            <div className="reviews-wrapper">
                <div className="reviews-track">
                    {[...reviews, ...reviews].map((item, index) => (
                        <div className="review-card" key={index}>
                            <img
                                src={item.picture}
                                alt={item.name}
                                className="review-image"
                            />

                            <h3>{item.name}</h3>

                            <div className="review-stars">
                                ☆☆☆☆☆
                            </div>

                            <p>{item.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;