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
        return jsonData;
        
    };


    export default getRequestConfig(async () => {
        try {
          const locale = await backendLanguage();

          if (locale === null || locale === undefined || (locale !== "en" && locale !== "tr")) {
            return {
              locale: 'en',
              messages: (await import(`./messages/en.json`)).default
            };
          }
      
          if (locale === "tr") {
            return {
              locale,
              messages: (await import(`./messages/tr.json`)).default
            };
          } else {
            return {
              locale,
              messages: (await import(`./messages/en.json`)).default
            };
          }
        } catch (error) {
          console.error("Error fetching locale:", error);
          // Default to English on error
          return {
            locale: 'en',
            messages: (await import(`./messages/en.json`)).default
          };
        }
      });