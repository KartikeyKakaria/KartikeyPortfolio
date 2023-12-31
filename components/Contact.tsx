import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        borderTopLeftRadius: "82px",
        borderTopRightRadius: "82px",
      }}
      className="w-full flex flex-col py-8 px-16 bg-gradient-to-r from-blue-600/70 to-blue-400/70 gap-10"
    >
      <h2 className="text-4xl font-bold text-center">Contact</h2>
      <div className="relative contact flex lg:flex-row flex-col gap-10 justify-around">
        <div className="contactDetails flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Drop Me a message</h3>
          <p className="text-gray-300 max-w-xl">
            Feel free to contact me and start a journey of collaborations and
            projects and our cummuloative growth 😉
          </p>
          <div className="flex flex-col details justify-start gap-5">
            <div className="gap-2 flex flex-row telephone items-center">
              <div
                style={{
                  borderRadius: "12px",
                }}
                className="bg-gradient-to-tl p-3 from-blue-600/70 to-blue-400/70"
              >
                <img
                  src="./icons/telephone.png"
                  height={20}
                  width={20}
                  alt=""
                />
              </div>
              <p>+91 8264445255</p>
            </div>
            <div className="gap-2 flex flex-row email items-center">
              <div
                style={{
                  borderRadius: "12px",
                }}
                className="bg-gradient-to-tl p-3 from-blue-600/70 to-blue-400/70"
              >
                <img src="./icons/email.png" height={20} width={20} alt="email" />
              </div>
              <p className="max-w-[180px]">kartikeykakaria07@gmail.com</p>
            </div>
            <div className="gap-2 flex flex-row adress items-center">
              <div
                style={{
                  borderRadius: "12px",
                }}
                className="bg-gradient-to-tl p-3 from-blue-600/70 to-blue-400/70"
              >
                <img src="./icons/location.png" height={20} width={20} alt="" />
              </div>
              <p className="max-w-[180px]">87/1 Lane no.1 SJS Avenue, Airport Rd. Amritsar, India</p>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: "12px",
          }}
          className="h-auto w-auto form flex flex-col bg-gradient-to-tl p-8 from-blue-600/70 to-blue-400/70 gap-5"
        >
          <input
            className="bg-[#050512] p-4 outline-none border-gray-400 border-[0.5px]"
            style={{
              borderRadius: "5px",
            }}
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-[#050512] p-4 outline-none border-gray-400 border-[0.5px]"
            style={{
              borderRadius: "5px",
            }}
            type="text"
            placeholder="Email"
          />
          <textarea
            className="bg-[#050512] p-4 outline-none border-gray-400 border-[0.5px]"
            placeholder="Drop your Message!"
            name="message"
            id="message"
            rows={3}
          ></textarea>
          <button
            style={{
              borderRadius: "12px",
            }}
            className="bg-[#050512] p-4 w-[40%]"
          >
            Send
          </button>
        </div>
      </div>
      <div className="bg-white w-full h-[0.5px]"></div>
      <div className="footer flex sm:flex-row flex-col justify-around items-center">
        <div className="logo sm:flex hidden">
          <img
            style={{
              borderRadius: "6px",
            }}
            src="logo.jpg"
            width={40}
            height={40}
            className=" shadow-md"
            alt=""
          />
        </div>
        <div className="text-gray-400">Made with ❤️| KartikeyKakaria</div>
        <div className="flex flex-row gap-5">
          <div
            style={{
              borderRadius: "12px",
            }}
            className="bg-gradient-to-tl p-3 from-blue-800/70 to-blue-400/70"
          >
            <img src="./icons/github.png" height={20} width={20} alt="" />
          </div>
          <div
            style={{
              borderRadius: "12px",
            }}
            className="bg-gradient-to-tl p-3 from-blue-800/70 to-blue-400/70"
          >
            <img src="./icons/email.png" height={20} width={20} alt="" />
          </div>
          <div
            style={{
              borderRadius: "12px",
            }}
            className="bg-gradient-to-tl p-3 from-blue-800/70 to-blue-400/70"
          >
            <img src="./icons/instagram.png" height={20} width={20} alt="" />
          </div>
          <div
            style={{
              borderRadius: "12px",
            }}
            className="bg-gradient-to-tl p-3 from-purple-300 to-purple-400"
          >
            <img src="./icons/discord.png" height={20} width={20} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
