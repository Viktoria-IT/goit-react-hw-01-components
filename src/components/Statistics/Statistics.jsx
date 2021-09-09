import css from './Statistics.module.css'
import PropTypes from 'prop-types'

// function randomColor (){
//     return Math.floor(Math.random()*16777215).toString(16);
// }

function Statistics({ title, stats }) {
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>{ title }</h2>}

        <ul className={css.statList}>
            {stats.map(stat => <li className={css.item} key={stat.id}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
            </li>)}
        </ul>
        </section>
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })),
    title: PropTypes.string    
}
    
export default Statistics