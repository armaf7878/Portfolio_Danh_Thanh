import { useState } from "react";

import gofix_end_user from "../assets/go_fix_project/user/end_user.svg";
import gofix_main from "../assets/go_fix_project/user/main.png";
import gofix_login from "../assets/go_fix_project/user/login.png";
import gofix_commerce from "../assets/go_fix_project/user/commerce.png";
import gofix_all_product from "../assets/go_fix_project/user/all_product.png";
import gofix_detail_product from "../assets/go_fix_project/user/detail_product.png";
import gofix_cart from "../assets/go_fix_project/user/cart.png";
import gofix_confirm_order from "../assets/go_fix_project/user/confirm_order.png";
import gofix_order_success from "../assets/go_fix_project/user/order_success.png";
import gofix_service from "../assets/go_fix_project/user/service.png";
import gofix_service_booking from "../assets/go_fix_project/user/service_booking.png";
import gofix_finding_mechanic from "../assets/go_fix_project/user/finding_mechanic.png";
import gofix_accept_rescue from "../assets/go_fix_project/user/accept_rescue.png";
import gofix_not_find_mechanic from "../assets/go_fix_project/user/not_find_mechanic.png";
import gofix_mechanic from "../assets/go_fix_project/mechanic/mechanic.svg";
import gofix_mechanic_main from "../assets/go_fix_project/mechanic/main.png";
import gofix_online from "../assets/go_fix_project/mechanic/online.png";
import gofix_request_booking from "../assets/go_fix_project/mechanic/request_booking.png";
import gofix_accept_booking from "../assets/go_fix_project/mechanic/accept_booking.png";

import intro_end_user from "../assets/fast_food_project/user/intro.svg";
import fastfood_main from "../assets/fast_food_project/user/main.png";
import fastfood_login from "../assets/fast_food_project/user/login.png";
import fastfood_voucher from "../assets/fast_food_project/user/voucher.png";
import fastfood_all_food from "../assets/fast_food_project/user/all_food.png";
import fastfood_detail_foood from "../assets/fast_food_project/user/detail_foood.png";
import fastfood_history_order from "../assets/fast_food_project/user/history_order.png";
import fastfood_tracking_order from "../assets/fast_food_project/user/tracking_order.png";
import fastfood_cart from "../assets/fast_food_project/user/cart.png";
import fastfood_confirm_order from "../assets/fast_food_project/user/confirm_order.png";
import intro_staff from "../assets/fast_food_project/staff/intro.svg";
import fast_food_staff_dashboard1 from "../assets/fast_food_project/staff/dashboard1.png";
import fast_food_staff_dashboard2 from "../assets/fast_food_project/staff/dashboard2.png";
import fast_food_staff_dashboard3 from "../assets/fast_food_project/staff/dashboard3.png";
import intro_shipper from "../assets/fast_food_project/shipper/intro.svg";
import fast_food_shipper_dashboard1 from "../assets/fast_food_project/shipper/dashboard1.png";
import fast_food_shipper_detail_order from "../assets/fast_food_project/shipper/detail_order.png";

import emotion_main from "../assets/emotion_regconize/main.png";
import emotion_upload from "../assets/emotion_regconize/upload_img.png";
import emotion_happy from "../assets/emotion_regconize/happy.jpg";
import emotion_disgust from "../assets/emotion_regconize/disgusted.jpg";
import emotion_sad from "../assets/emotion_regconize/sad.jpg";
import emotion_fear from "../assets/emotion_regconize/fearful.jpg";
import emotion_suprise from "../assets/emotion_regconize/suprise.jpg";
import emotion_neutral from "../assets/emotion_regconize/neutral.jpg";
import emotion_angry from "../assets/emotion_regconize/angry.jpg";

import SliderProject from "../components/SliderProject";

export default function HightLightProject() {
  const [rescueClicked, setrescueClicked] = useState(false);
  const [fastfoodClicked, setfastfoodClicked] = useState(false);
  const [recognizeClicked, setRecognizeClicked] = useState(false);

  const ProjectBlock = ({ id, title, desc, image, github, reverse, onOpen }) => (
    <div id={id} className="grid items-center grid-cols-1 gap-6 pb-12 md:grid-cols-2 ">
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <h2 className="pb-4 text-xl font-light font-Gothic text-n-50">{title}</h2>
        <div className="w-full rounded-2xl bg-radial from-p-450 via-p-500/30 to-p-900 p-4 font-Gothic text-sm font-extralight text-n-50 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] md:text-base">
          <p className="mb-4">
            {desc}
          </p>
          <a className="px-4 py-2 border rounded-2xl" href={github} target="_blank">GitHub</a>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpen}
        className={`${reverse ? "md:order-1" : ""} group rounded-2xl bg-linear-to-tr from-p-450/30 to-p-900 p-2`}
        aria-label={`Open slider: ${title}`}
      >
        <img
          src={image}
          alt={title}
          className="h-auto w-full rounded-xl object-contain transition-transform group-hover:scale-[1.01] cursor-pointer"
          loading="lazy"
        />
      </button>
    </div>
  );

  return (
    <section id="hightlight_project" className="w-full bg-p-900 md:px-55">
      <div className="w-full max-w-6xl px-4 pb-8 mx-auto md:px-6">
        <h1 className="pb-8 text-2xl font-Gothic text-n-50">HightLight Project</h1>

        <ProjectBlock
          id="rescue_web"
          title="Rescue Emergency Web"
          image={gofix_main}
          github="https://github.com/armaf7878/go_fixed_project.git"
          onOpen={() => setrescueClicked(true)}
          desc={
            <>
              GoFix is a real-time emergency rescue and repair platform that enables users to send requests
              with their location and quickly connect with nearby mechanics.
              <br />
              - The system provides real-time tracking of rescue status and locations on a map, optimizing
              response time and user experience, while also offering a marketplace for vehicle parts.
              <br />
              - Built on a Client–Server architecture using React, Node.js, MongoDB, Socket.IO, and Leaflet,
              GoFix ensures scalability and efficient real-time data processing.
            </>
          }
        />

        {rescueClicked ? (
          <SliderProject
            onClose={() => setrescueClicked(false)}
            image={[
              gofix_end_user,
              gofix_main,
              gofix_login,
              gofix_commerce,
              gofix_all_product,
              gofix_detail_product,
              gofix_cart,
              gofix_confirm_order,
              gofix_order_success,
              gofix_service,
              gofix_service_booking,
              gofix_finding_mechanic,
              gofix_accept_rescue,
              gofix_not_find_mechanic,
              gofix_mechanic,
              gofix_mechanic_main,
              gofix_online,
              gofix_request_booking,
              gofix_accept_booking,
            ]}
          />
        ) : (
          ""
        )}

        <ProjectBlock
          id="food_ordering"
          title="Food Ordering Web"
          github="https://github.com/armaf7878/Fast_Food_Website"
          image={fastfood_main}
          reverse
          onOpen={() => setfastfoodClicked(true)}
          desc={
            <>
              FastFood is a full-stack online food ordering and delivery platform that allows users to browse
              foods, place orders, apply vouchers, and track deliveries in real time.
              <br />
              - The system supports complete order workflows including cart management, VNPay payments,
              discount vouchers, and real-time shipper tracking via WebSocket.
              <br />
              - Built on a Client–Server architecture using Django REST Framework, React, PostgreSQL,
              WebSocket, and cloud deployment, FastFood ensures scalability, secure data handling, and smooth
              real-time interaction
            </>
          }
        />

        {fastfoodClicked ? (
          <SliderProject
            onClose={() => setfastfoodClicked(false)}
            image={[
              intro_end_user,
              fastfood_login,
              fastfood_main,
              fastfood_voucher,
              fastfood_all_food,
              fastfood_detail_foood,
              fastfood_cart,
              fastfood_confirm_order,
              fastfood_history_order,
              fastfood_tracking_order,
              intro_staff,
              fast_food_staff_dashboard1,
              fast_food_staff_dashboard2,
              fast_food_staff_dashboard3,
              intro_shipper,
              fast_food_shipper_dashboard1,
              fast_food_shipper_detail_order,
            ]}
          />
        ) : (
          ""
        )}

        <ProjectBlock
          id="emotion_recognize"
          title="Emotion Recognize App"
          github="https://github.com/armaf7878/emotion_recognize_app"
          image={emotion_main}
          onOpen={() => setRecognizeClicked(true)}
          desc={
            <>
              LEARN-COMPUTER_VISION is an applied computer vision learning and research project focused on
              real-time face detection and emotion recognition using deep learning.
              <br />
              - The system supports both webcam and static image input, automatically detects human faces
              and classifies facial emotions in real time, combining classical computer vision and modern
              neural networks.
              <br />
              - Built on a modular AI pipeline using Python, OpenCV, PyTorch, ResNet18 (fine-tuned on
              FER2013), and a desktop UI (Tkinter), the project emphasizes hands-on experimentation, model
              training, evaluation.
            </>
          }
        />

        {recognizeClicked ? (
          <SliderProject
            onClose={() => setRecognizeClicked(false)}
            image={[
              emotion_main,
              emotion_upload,
              emotion_happy,
              emotion_disgust,
              emotion_sad,
              emotion_fear,
              emotion_suprise,
              emotion_neutral,
              emotion_angry,
            ]}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
