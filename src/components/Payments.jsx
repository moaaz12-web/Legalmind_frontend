// import React from 'react'
// // eslint-disable-next-line 
// import pfImg from '../assets/pfImg.png'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import './ParentComp/ParentComp.css'
// import Footer from './Footer/Footer.js'
// import getStripe from './stripe.js'


// const Payments = () => {
//     const {email}  = JSON.parse(localStorage.getItem('user'))
//     const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user._id;
//   const subscriptionType = "Basic"

//     async function handleCheckout(event) {
//         console.log(event.target.id)

//         if (event.target.id === 'Basic'){
//             const stripe = await getStripe();
//             const { error } = await stripe.redirectToCheckout({
//                 lineItems: [
//                     {
//                         price: "price_1NFlYmA5eTipZQn7r4oiX8Nf",
//                         quantity: 1,
//                     },
//                 ],
//                 mode: 'subscription',
//                 successUrl: `${window.location.origin}/users/profile?type=${event.target.id}`,
//                 cancelUrl: `http://localhost:3000/home`,
//                 customerEmail: email,
//             });

//         } else if (event.target.id === "Standard"){
//             const stripe = await getStripe();
//             const x = await stripe.redirectToCheckout({
//                 lineItems: [
//                     {
//                         price: "price_1NFlYmA5eTipZQn7r4oiX8Nf",
//                         quantity: 1,
//                     },
//                 ],
//                 mode: 'subscription',
//                 successUrl: `${window.location.origin}/users/profile?type=${event.target.id}`,
//                 cancelUrl: `http://localhost:3000/home`,
//                 customerEmail: email,
//             });


//         }else if(event.target.id === "Premium"){
//             const stripe = await getStripe();
//             const res = await stripe.redirectToCheckout({
//                 lineItems: [
//                     {
//                         price: "price_1NGV5XA5eTipZQn7j1CtCABZ",
//                         quantity: 1,
//                     },
//                 ],
//                 mode: 'subscription',
//                 successUrl: `${window.location.origin}/users/profile?type=${event.target.id}`,
//                 cancelUrl: `http://localhost:3000/home`,
//                 customerEmail: email,
//             });

//             axios
//         .post('/subscription/subscribed', { userid: userId, subscription_type: subscriptionType })
//         .then((response) => {
//           console.log('POST request successful:', response.data);
//           // Handle any further actions or display success message
//         })
//         .catch((error) => {
//           console.error('Error sending POST request:', error);
//           // Handle the error or display an error message
//         });


//         }

//         // console.warn(error.message);
//     }




//     const navigate = useNavigate()
//     // eslint-disable-next-line 

//     return (
//         <>
//             <section className="bg-white dark:bg-gray-900">
//                 <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
//                     <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
//                         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Designed for business teams like yours</h2>
//                         <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at MumboJumbo, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
//                     </div>
//                     <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
//                         <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
//                             <h3 className="mb-4 text-2xl font-semibold">Free</h3>
//                             {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p> */}
//                             <div className="flex justify-center items-baseline my-8">
//                                 <span className="mr-2 text-5xl font-extrabold">$0</span>
//                                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//                             </div>
//                             <ul role="list" className="mb-8 space-y-4 text-left">
//                                 <li className="flex items-center space-x-3">
//                                     <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>2000 words per month</span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">

//                                     <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>No setup, or hidden fees</span>
//                                 </li>


//                             </ul>
//                             <button id = "Basic" onClick={handleCheckout} className="button-17">Get started</button>
//                         </div>
//                         <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
//                             <h3 className="mb-4 text-2xl font-semibold">Standard</h3>
//                             {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p> */}
//                             <div className="flex justify-center items-baseline my-8">
//                                 <span className="mr-2 text-5xl font-extrabold">$10</span>
//                                 <span className="text-gray-500 dark:text-gray-400" >/month</span>
//                             </div>
//                             <ul role="list" className="mb-8 space-y-4 text-left">
//                                 <li className="flex items-center space-x-3">
//                                     <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>10000 words per month</span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>No setup, or hidden fees</span>
//                                 </li>

//                             </ul>
//                             <button id = "Standard" onClick={handleCheckout} className="button-17">Get started</button>
//                         </div>
//                         <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
//                             <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
//                             {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p> */}
//                             <div className="flex justify-center items-baseline my-8">
//                                 <span className="mr-2 text-5xl font-extrabold">$20</span>
//                                 <span className="text-gray-500 dark:text-gray-400">/month</span>
//                             </div>
//                             <ul role="list" className="mb-8 space-y-4 text-left">
//                                 <li className="flex items-center space-x-3">
//                                     <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>15000 words per month</span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>No setup, or hidden fees</span>
//                                 </li>

//                             </ul>
//                             <button id = "Premium" onClick={handleCheckout} className="button-17">Get started</button>
//                         </div>
//                     </div>
//                 </div>

//             </section>
//             <Footer />
//         </>
//     )
// }

// export default Payments


import React from 'react'
// eslint-disable-next-line 
import pfImg from '../assets/pfImg.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './ParentComp/ParentComp.css'
import Footer from './Footer/Footer.js'
import getStripe from './stripe.js'


const Payments = () => {
    const { email } = JSON.parse(localStorage.getItem('user'))
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;
    const navigate = useNavigate()

    async function handleCheckout(event) {
        event.preventDefault();
        // console.log(event.target.id)
        let priceid = ""
        if (event.target.id === 'Basic') {
            // priceid = `${process.env.price_id_std}`
            priceid = "price_1NFlYmA5eTipZQn7r4oiX8Nf"

        } else if (event.target.id === "Standard") {
            // priceid = `${process.env.price_id_premium}`
            priceid = "price_1NGV5XA5eTipZQn7j1CtCABZ"
        } else if (event.target.id === "Premium") {
            // priceid = `${process.env.price_id_premium}`
            priceid = "price_1NGV5XA5eTipZQn7j1CtCABZ"
        }

        console.log(priceid)

        axios.post('https://dull-red-lizard-belt.cyclic.app/create-checkout-session', {
            priceid: priceid,
            subType: event.target.id,
        })
            .then((response) => {
                const session = response.data.url;
                
                // Use the session data as needed
                console.log('Checkout session created:', session);
                window.location.href = session.toString();
            })
            .catch((error) => {
                console.error('Error creating checkout session:', error);
            });
    }




    // eslint-disable-next-line 

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">Designed for business teams like yours</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at MumboJumbo, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
                            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p> */}
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$5</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>1000 words per month</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>


                            </ul>
                            <button id="Basic" onClick={handleCheckout} className="button-17">Get started</button>
                        </div>
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">Standard</h3>
                            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p> */}
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$10</span>
                                <span className="text-gray-500 dark:text-gray-400" >/month</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>10000 words per month</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>

                            </ul>
                            <button id="Standard" onClick={handleCheckout} className="button-17">Get started</button>
                        </div>
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p> */}
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$20</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>15000 words per month</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>

                            </ul>
                            <button id="Premium" onClick={handleCheckout} className="button-17">Get started</button>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Payments
