import React from "react";
import { toast } from "react-toastify";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    event.target.reset();
    toast("Thank you for subscribing!");
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800 dark:text-gray-300">
        Subscribe Now & get 30% off
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-3">
        Unlock exclusive perks with our subscription service—enjoy monthly
        surprises delivered to your door! Sign up today for special offers and
        early access to new arrivals!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 my-6 mx-auto border border-gray-300 dark:border-gray-700 pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none bg-transparent dark:text-white"
          required
        />
        <button
          type="submit"
          className="bg-black dark:bg-white text-white dark:text-black text-xs px-10 py-4 transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
