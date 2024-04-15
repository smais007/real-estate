import {
  UserIcon,
  KeyIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Property Management.",
    description:
      "Effortlessly maintain your luxury properties with our comprehensive property management services, ensuring that every aspect is meticulously handled to preserve their allure and value.",
    icon: UserIcon,
  },
  {
    name: "Mortgage Services.",
    description:
      "Secure the home of your dreams with our tailored mortgage services, offering competitive rates and personalized guidance to make your luxury property ownership.",
    icon: KeyIcon,
  },
  {
    name: "Currency Services.",
    description:
      "Streamline your international real estate transactions with our currency services, facilitating seamless exchanges and ensuring optimal value for your luxury property investments across borders.",
    icon: CurrencyDollarIcon,
  },
];

export default function ChooseUs() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="lg:max-w-lg"
            >
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Us
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                As the complexity of buildings to increase, the field of
                architecture.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
