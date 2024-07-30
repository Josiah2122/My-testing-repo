import React from "react";

export default function InputTypes() {
  return (
    <>
      <form>
        <label htmlFor="favColor">Choose your favorite color:</label>
        <input
          type="color"
          className="favColor"
          name="favColor"
          value="#ff0000"
        />
      </form>
      {/* datetime-local input type */}
      <form>
        <label for="meeting">Schedule Meeting:</label>
        <input type="datetime-local" id="meeting" name="meeting" />
      </form>

      {/* month input type */}
      <form>
        <label for="expiry">Credit Card Expiry Date:</label>
        <input type="month" id="expiry" name="expiry" />
      </form>

      {/* week input type */}
      <form>
        <label for="week">Select Week:</label>
        <input type="week" id="week" name="week" />
      </form>

      {/* time input type */}
      <form>
        <label for="week">Select Week:</label>
        <input type="week" id="week" name="week" />
      </form>

      {/* range input type */}
      <form>
        <label for="volume">Volume Control:</label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          value="50"
        />
      </form>

      {/* search input type */}
      <form>
        <label for="site-search">Search the site:</label>
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="Search..."
        />
        <input type="submit" value="Search" />
      </form>

      {/* tel input type */}
      <form>
        <label for="phone">Enter your phone number:</label>
        <input type="tel" id="phone" name="phone" placeholder="123-456-7890" />
      </form>

      {/* url input type */}
      <form>
        <label for="website">Enter a valid url:</label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="https://example.com"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
