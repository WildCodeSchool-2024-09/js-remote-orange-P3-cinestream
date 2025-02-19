function definirUrlVideoIframe(url: string): string {
  try {
    if (url.includes("youtube")) {
      const urlYoutube = url.split("watch?v=");
      const urlYoutube2 = urlYoutube[1].split("&");
      return `https://www.youtube.com/embed/${urlYoutube2[0]}`;
    }
    if (url.includes("youtu.be")) {
      const urlYoutube = url.split("youtu.be/");
      return `https://www.youtube.com/embed/${urlYoutube[1]}`;
    }
    //en case de crash
  } catch (error) {
    return url;
  }
  return url;
}

export default definirUrlVideoIframe;
