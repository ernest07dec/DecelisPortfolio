import { useEffect, useState } from "react";
import ProfilePic from "../../assets/about_img/about3.jpg";
// IMAGES
import CodewarsLogo from "../../assets/playground_img/codewars.png";
import { retrieveCwProfile } from "../../components/api/codewars";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Grid } from "react-loader-spinner";
import { TechStacksList } from "../../components/jsonfiles/TechStacksList";
export const Profile = () => {
  const [cwProfile, setCwProfile] = useState(null);
  const languages = TechStacksList;
  useEffect(() => {
    const fetchCwProfile = async () => {
      try {
        const response = await retrieveCwProfile();
        setCwProfile(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCwProfile();
  }, []);
  return (
    <section
      id="profile"
      className="max-w-screen-xl mx-auto mt-28 lg:grid lg:grid-cols-12 flex flex-col gap-5"
    >
      {/* PROFILE */}
      <div className="lg:col-span-3 col-span-6 mx-10 md:mx-20 lg:mx-0 text-white flex items-center justify-center bg-gray-900 rounded-xl shadow-md h-full">
        <div className="p-10 flex flex-col justify-center max-w-screen-md w-full">
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4"
            src={ProfilePic}
            alt="Profile"
          />
          <h2 className="text-xl font-semibold text-purple-500 text-center mb-2">
            Ernest Fortune J. Decelis
          </h2>
          <p className="text-gray-400 text-center mb-4">
            Full Stack Web Developer
          </p>
          <p className="py-3 flex gap-5 justify-center items-end text-3xl h-20">
            <a
              href="https://www.linkedin.com/in/ernest-fortune-decelis-613208262/"
              target="_blank"
              rel="noopener noreferrer"
              className="animate duration-200 hover:text-5xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ernest07dec"
              target="_blank"
              rel="noopener noreferrer"
              className="animate duration-200 hover:text-5xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com/ernest07dec/"
              target="_blank"
              rel="noopener noreferrer"
              className="animate duration-200 hover:text-5xl"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/ernest07dec/"
              target="_blank"
              rel="noopener noreferrer"
              className="animate duration-200 hover:text-5xl"
            >
              <FaInstagram />
            </a>
          </p>
        </div>
      </div>
      {/* CODEWARS */}
      <div className="col-span-9 grid grid-cols-12 border border-indigo-800 p-3 rounded-2xl">
        <div className="col-span-6 flex flex-col justify-between text-white ml-5">
          {cwProfile ? (
            <>
              <div className="flex gap-4 mb-4 h-full">
                <div className="bg-red-600 h-20 w-20 p-2 mt-4 rounded-xl flex-shrink-0">
                  <img
                    src={CodewarsLogo}
                    alt="Codewars"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex h-full flex-col justify-around">
                  <h4 className="text-lg font-bold">Codewars Profile</h4>
                  <div>
                    <p className="text-gray-300">
                      Username: {cwProfile?.username}
                    </p>
                    <p className="text-gray-300">Clan: {cwProfile?.clan}</p>
                  </div>
                  <h4 className="text-lg font-bold">Statistics:</h4>
                  <p className="text-gray-300">
                    Rank:{" "}
                    <span
                      className={`text-${cwProfile?.ranks?.overall?.color}-200 font-semibold border-2 border-${cwProfile?.ranks?.overall?.color}-100 px-3 py-1 rounded-3xl mb-2`}
                    >
                      {`${cwProfile?.ranks?.overall?.name.charAt(
                        0
                      )} ${cwProfile?.ranks?.overall?.name
                        .charAt(2)
                        .toUpperCase()}${cwProfile?.ranks?.overall?.name.slice(
                        3
                      )}`}
                    </span>
                  </p>
                  <p className="text-gray-300">
                    Honor: {cwProfile?.honor} points
                  </p>
                  <p className="text-gray-300">
                    Challenges Completed:{" "}
                    {cwProfile?.codeChallenges?.totalCompleted} Challenges
                  </p>
                </div>
              </div>
              <div className=""></div>
            </>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <Grid
                visible={true}
                height="80"
                width="80"
                color="#5632a8"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
              />
            </div>
          )}
        </div>
        <div className="col-span-6 text-white flex flex-wrap gap-y-4 gap-x-2 p-5">
          {languages.map((language, index) => (
            <div
              key={index}
              className="border-blue-700 border text-gray-100 px-3 rounded-2xl mb-2 flex items-center"
            >
              <span>{language?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
