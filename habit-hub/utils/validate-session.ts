import { verifyRequestOrigin } from "lucia";
import { lucia } from "@/auth";

const getHeaders = (request: Request) => ({
    origin: request.headers.get("Origin"),
    host: request.headers.get("Host"),
    cookie: request.headers.get("Cookie"),
  });
  
  const verifyOrigin = (origin: string, host: string) => 
    origin && host && verifyRequestOrigin(origin, [host]);
  
  const getSessionId = (cookie: string) => lucia.readSessionCookie(cookie ?? "");
  
  const createResponse = (status: number, headers?: Headers) => 
    new Response(null, { status, headers });
  
    const appendCookieToHeaders = (headers: Headers, session: any, createCookieFn: Function) => {
        if (session) {
          const sessionCookie = createCookieFn(session.id);
          headers.append("Set-Cookie", sessionCookie.serialize());
        }
        return headers;
      };
  
  export async function validateSession(request: Request) {
    const { origin,  host, cookie } = getHeaders(request);

    if (!verifyOrigin(origin!, host!)) {
        return createResponse(403);
    }

    const sessionId = getSessionId(cookie ?? ""); // Use default value for cookie
    if (!sessionId) {
        return createResponse(401);
    }

    const headers = new Headers();
    const { session, user } = await lucia.validateSession(sessionId);
  
    if (!session) {
        return createResponse(401);
      }
  
    if (session) {
        if (session.fresh) {
          appendCookieToHeaders(headers, session, lucia.createSessionCookie);
        }
      } else {
        appendCookieToHeaders(headers, null, lucia.createBlankSessionCookie);
      }
  
    console.log("SESSION", session, user, headers);
    // Use the headers object in the final response
    return createResponse(200, headers);
  }