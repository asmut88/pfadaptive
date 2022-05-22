import styles from './styles/Menu.module.css'

const Menu: React.FC = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li>Home</li>
                <li>About me</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Contacts</li>
            </ul>
        </div>
    )
}

export { Menu }