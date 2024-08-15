import pc from "./pc.avif"

import "./Sidebar.scss"

const Sidebar = (props) => {
    return <div className={`sidebar ${props.className}`}>
        <div className="sidebar__titleBox">
            <h2 className="sidebar__title">About me</h2>
        </div>

        <img src={pc} alt="" className="sidebar__image" />

        <p className="sidebar__paragraph">The "Neutronzz" blog application appears to be a platform designed for sharing blog posts, articles, or other content, possibly related to technology, science, or a niche community, given the name "Neutronzzz" which may evoke themes of energy, particles, or advanced topics.</p>
    </div>;
}

export default Sidebar;