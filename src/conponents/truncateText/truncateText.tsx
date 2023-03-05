  export const TruncateText = (text: any)  => {
    if (!text) {
      return "";
    }
    if (text.length > 50) {
      return text.substring(0, 50) + "...";
    } else {
      return text;
    }
  }
  