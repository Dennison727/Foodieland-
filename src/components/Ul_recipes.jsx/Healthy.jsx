
function Healthy () {
    const healthyfood = [
       { id: 1,
           img: "/images/Ellipse.png",
           text: "Dennis Smith",
           date: "12 March 2024"
       },
       { id: 2,
            img: "/icons/Timer.png",
            text: "PREP TIME",
            time: "15 minutes",
       },
       { id: 3,
            img: "/icons/Timer.png",
            text: "COOK TIME",
            time: "15 minutes",
         
       },
       { id: 4,
            img: "/icons/ForkKnife.png",
            text: "Chicken",
            time: "20 minutes"
       }
    ];
    return (
        <section className="">
            <div>
                <h2 className="font-bold text-6x1 pt-10">Healthy Japanese Fried Rice</h2>
                <div className="flex flex-wrap gap-4 pt-5 items-start h">
                   {healthyfood.map((item) => (
                        <div key={item.id}  className="flex items-center gap-3 bg-white rounded-md p-3 shadow-sm ">
                          <img src={item.img} alt={item.text} className="w-6 h-6 object-cover" /> 
                          <div className=" ">
                            <h3 className="text-sm font-medium">{item.text}</h3>
                            <span className="text-xs text-gray-600 block">{item.time}</span>
                            <h4 className="text-xs text-gray-600 block">{item.date}</h4>
                          </div>
                        </div> 
                        



                    ))} 
                </div>






            </div>
        </section>
    );
    
}
export default Healthy;