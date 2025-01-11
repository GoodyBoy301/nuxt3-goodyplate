type formats = "Jan 1, 2000" | "Jan 1, 2000 12:00PM GMT" | "1st January, 2000"

export function Format(format: formats, date?: string) {
  if (!date) return
  const dt = new Date(date)
  let result = date
  switch (format) {
    case "Jan 1, 2000": {
      const dt_string = dt.toDateString()
      const dt_string_truncate_weekday = dt_string.substring(3)
      const formatted = replaceLast(dt_string_truncate_weekday, " ", ", ")
      result = formatted
      break
    }

    case "Jan 1, 2000 12:00PM GMT": {
      const dt_string = dt.toString()
      // const dt_string_truncate_weekday = dt_string.substring(3)
      // const formatted = replaceLast(dt_string_truncate_weekday, " ", ", ")
      // result = formatted
      result = dt_string
      break
    }

    case "1st January, 2000": {
      const dt_string = dt.toDateString()
      const formatted = dt_string.substring(3)
      const dt_break_down = formatted.split(" ")
      const dt_merge = `${ordinal_suffix_of(Number(dt_break_down[2]))} ${dt.toLocaleString("default", { month: "long" })}, ${
        dt_break_down[3]
      }`
      result = dt_merge
      break
    }
  }
  return result
}

export function TimeToReadArticle(article: number) {
  const wordsPerMinute = 200 // Average case.
  if (article <= 0) return ""
  const value = Math.ceil(article / wordsPerMinute)
  return `${value} Min read`
}
