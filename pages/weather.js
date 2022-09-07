import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Input, Footer, Navbar } from '@/components/index';
import { WeatherSchema } from '../schema/authSchema';
import { useFormContext } from 'react-hook-form';
import HookForm from '@/components/form/Form';

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getLocation(address = 'lagos') {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
    const response = await fetch(url);
    const currentLocation = await response.json();
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    //console.log('currentLocation', currentLocation);
    if (currentLocation) {
      setLocation(currentLocation);
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getLocation();
  }, []);
  const onSubmit = async (data) => {
    await getLocation(data.location);
    // reset({ data: '' });
  };

  return (
    <>
      <Navbar />
      <div>
        <div className=" 2xl:container 2xl:mx-auto overflow-hidden">
          <div className=" mt-6 py-6 px-2 lg:py-12 mx-auto ">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[550px] max-w-xl h-[450px] bg-primary-400 ">
                {loading ? (
                  <div className="text-center">
                    <h4 className="text-white text-6xl mt-32 lg:text-6xl text-Inter">
                      Loading <br /> weather
                    </h4>
                  </div>
                ) : (
                  <div className="relative">
                    {location?.name ? (
                      <p className="text-5xl mx-8 my-10 text-white font-bold font-RozhaOne">{location?.name}</p>
                    ) : (
                      <p className="text-5xl mx-8 my-10 text-white font-bold font-RozhaOne">N/A</p>
                    )}

                    <div className="text-center">
                      {location?.main ? (
                        <h4 className="text-white text-4xl mt-20 mb-5 lg:text-7xl font-bold font-RozhaOne">
                          {location?.main?.temp.toFixed()}°C
                        </h4>
                      ) : (
                        <h4 className="text-white text-4xl mt-20 mb-5 lg:text-6xl font-RozhaOne">N/A</h4>
                      )}
                      {location?.weather ? (
                        <p className="text-white text-lg mt-3 lg:text-xl font-semibold">
                          {location?.weather[0].main?.toUpperCase()}
                        </p>
                      ) : (
                        <p className="text-white text-lg mt-3 lg:text-xl font-semibold">N/A</p>
                      )}

                      {location?.weather ? (
                        <p className="text-white text-sm lg:text-base font-semibold">
                          {location?.weather[0].description}
                        </p>
                      ) : (
                        <p className="text-white text-sm lg:text-base font-semibold">N/A</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 w-96 ">
                <HookForm onSubmit={onSubmit} schema={WeatherSchema}>
                  <Input label="Location" placeholder="Enter your Location" name="location" type="text" />

                  <div className="my-2">
                    {loading ? (
                      <Button
                        leftIcon={
                          <svg
                            aria-hidden="true"
                            role="status"
                            className="inline mr-3 w-4 h-4 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                      >
                        Loading...
                      </Button>
                    ) : (
                      <Button
                        // type="button"
                        // onClick={() => resetField('location', { keepError: true })}
                        className="font-semibold text-black py-2.5 px-5"
                      >
                        Get Weather
                      </Button>
                    )}
                  </div>
                </HookForm>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Weather;
