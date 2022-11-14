import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import git from '../Assets/img/icons8-github.gif'
import play from '../Assets/img/play.png'
export default function CardsGames(g) {
    return (
        <Card className='cardGames' bg='dark' text='light'style={{ width: '17rem'}}>
            <Card.Body key='light'>
                <Card.Img variant="top" src={g.img}/>
                <Card.Title >{g.titulo}</Card.Title>
                <Card.Text >
                    {g.descripcion}
                </Card.Text>
                <div className='linkGames'>
                    <Nav.Link href={g.linkG} target='_blank'>
                        <h6>Ir a Git</h6>
                        <img width={'50'} variant="top" src={git} />
                    </Nav.Link>
                    <Nav.Link href={g.linkP} >
                        <h6 className='linkPlay'>Play</h6>
                        <img width={'50'} variant="top" srcSet={play}  />
                    </Nav.Link>
                </div>
            </Card.Body>
        </Card>
    )
};
