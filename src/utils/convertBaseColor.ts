type Color = {
    [key: string]: string
  }


  const colors: Color = {
    green: "0, 255, 0",
    blue: "0, 0, 255",
    red: "255, 0, 0",
    black:"0, 0, 0",
    brown:" 128, 0, 0",
    gray:"128, 128, 128",
    pink:"255, 0, 255",
    purple:"128, 0, 128",
    white:"255, 255, 255",
    orange: "255, 165, 0",
    yellow: "255, 255, 0",
    
  }

  export const colorConverter = (color: string, opacity = 0.25): string | null => {
    const rgba = colors[color]
    if (rgba) {
      return `rgba(${rgba}, ${opacity})`
    }
    return null
  }
  