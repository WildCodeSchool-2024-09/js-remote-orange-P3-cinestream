function definirUrlVideoIframe(url: string): string {
  if (url.includes("youtube")) {
    const urlYoutube = url.split("watch?v=");
    const urlYoutube2 = urlYoutube[1].split("&");
    return `https://www.youtube.com/embed/${urlYoutube2[0]}`;
  }
  return url;
}

export default definirUrlVideoIframe;
