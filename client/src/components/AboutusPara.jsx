import react from "react";
import "../index.css";



const AboutusPara=()=>{
    return(

        <>
        
            <div className="py-4" style={{backgroundImage: `url(https://i.postimg.cc/T1qk5tmJ/ABG-1.jpg)` , height:'700px', backgroundRepeat:'no-repeat', backgroundSize: 'cover',paddingBottom:'30px', paddingTop:'90px'}}>
            <div style={{backgroundColor:'rgba(178, 190, 181,0.6)', padding:'30px'}}>
                <h1 className="text-center text-2xl py-4 sm:text-3xl md:text-4xl" style={{fontFaimily:"Candara",fontWeight:"600"}}>Welcome to Tailor Fit Hub</h1>
                <p className="px-8 text-justify text-sm sm:text-md lg:text-lg" style={{fontWeight:'bold'}} >
                Welcome to Tailor Fit Hub, where creativity meets craftsmanship in the world of bespoke fashion! Our platform connects local tailors with discerning customers, fostering a vibrant community of sartorial excellence. With an intuitive interface, customers can explore a diverse range of designs crafted by talented tailors in their vicinity, seamlessly blending style with convenience. Embracing the essence of personalization, clients can bring their unique visions to life by providing customized measurements, ensuring each garment is a perfect fit, both in form and spirit. Join us in celebrating the artistry of local tailors and embark on a journey where every stitch tells a story of passion and innovation.
                </p>
                
                
                <p className="py-2 px-8 text-xl font-medium pt-6 sm:text-2xl "> <span className="font-bolder  text-xl" ></span><b>Embarking on a majestic journey dedicated to the masters of our craft - our local tailors</b></p> 
                <p className="px-8 py-1 text-justify text-sm sm:text-md lg:text-lg" style={{fontWeight:'bold'}}>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moreover, Tailor Fit Hub goes beyond just connecting customers with skilled artisans; it's a platform dedicated to empowering local talent and fostering economic growth within communities. By supporting these talented tailors, we not only ensure the preservation of traditional craftsmanship but also pave the way for innovative design trends to flourish. With every purchase made on Tailor Fit Hub, you're not just acquiring a garment; you're investing in the rich tapestry of local creativity and craftsmanship, creating a ripple effect of positive change in the fashion landscape. Join us in redefining the future of fashion, one stitch at a time.</p>
                
                </div>  
            </div>
        </>
    );
}
export default AboutusPara;