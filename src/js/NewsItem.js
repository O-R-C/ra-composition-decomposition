import { v4 as uuidv4 } from 'uuid'

class NewsItem {
  /**
   * Initializes a new instance of the NewsItem class.
   *
   * @param {Object} options - Options for the NewsItem instance.
   * @param {string} options.title - The title of the news item.
   * @param {Array<Object>} options.content - The content of the news item.
   * @param {string} options.content[].icon - The icon for the content item.
   * @param {string} options.content[].text - The text for the content item.
   * @return {NewsItem} The newly created NewsItem instance.
   */
  constructor({ title, content }) {
    this.title = title
    this.content = content.map(({ icon, text }) => ({ icon: icon || '📰', text, id: uuidv4() }))
    this.id = uuidv4()
  }
}

export default NewsItem
