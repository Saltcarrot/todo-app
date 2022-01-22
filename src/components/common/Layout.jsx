import styles from './Layout.module.sass'

const Layout = ({ children }) => {
	return <div className={styles.layout}>{children}</div>
}

export default Layout
