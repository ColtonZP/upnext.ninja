import './styles.css'
import managerImage from './game-manager.png'

export const App = () => {
  return (
    <div className="container">
      <h1>Up Next 🥷</h1>

      <div className="game-manager">
        <div className="info">
          <h2>Game Manager</h2>

          <p>An app that lets you track your game lists.</p>

          <a href="https://gamesdemo.upnext.ninja">Try</a>
          <button type="button">Download</button>
          <img src={managerImage} alt="Game Manager" />
        </div>
      </div>
    </div>
  )
}
