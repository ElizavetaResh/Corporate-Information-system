import {
    Box,
    Button,
} from 'react-bulma-components';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="mon-notfound">
            <Box>
                <div className={"NotF-head"}>
                    <p class="title is-1 ">
                        Упс... 404   </p>
                    <p class="subtitle is-3">Страница не найдена</p>
                </div>

                <div  className="NotF-middle">
                    <p>Этому может быть несколько объяснений:</p>
                    <ul >
                        <li>Страница удалена или перемещена</li>
                        <li>Вы ошиблись при вводе адреса страницы</li>
                    </ul>
                </div>
                {/*<div className="NotF-bottom">
                    <p>Рекомендуем перейти на главную страницу:</p>
                    <br></br>
                    <a className={"button is-info is-medium  is-rounded is-outlined " } href="/notifications"  >
                        Мои уведомления</a>
                </div>*/}
            </Box>
        </div>
    )
}

export default NotFound;
