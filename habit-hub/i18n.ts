import {getRequestConfig} from 'next-intl/server';
import { headers } from 'next/headers';
 
const backendLanguage = async () => {
        const cookies = headers().get("cookie");
        const response = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN ?? ""}/api/get-user-language`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
                Cookie: cookies ?? "",
            },
        });
        const jsonData = await response.json();
        console.log("HADE BE KARDEŞ", jsonData);
        return jsonData;
        
    };


export default getRequestConfig(async () => {

  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = await backendLanguage();
  console.log ("LOCALE", locale);

  if ( locale === "tr" ) {
    return {
      locale,
      messages: (await import(`./messages/tr.json`)).default
    };
    }
    else {
        return {
            locale,
            messages: (await import(`./messages/en.json`)).default
        };
        }
 
});