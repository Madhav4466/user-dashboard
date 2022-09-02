import React from 'react';
import { Card } from 'react-bootstrap';

export default class CardComponent extends React.Component
{
    render()
    {
        return(
            <>
                <Card id={this.props.id} className="text-center">
                    {this.props.cardHeader !== undefined ? <Card.Header>{this.props.cardHeader}</Card.Header> : null}
                    <Card.Body>
                        <Card.Title>{this.props.cardTitle}</Card.Title>
                        <Card.Text>
                            {this.props.cardText}
                        </Card.Text>
                        {this.props.cardContent}
                    </Card.Body>
                    {this.props.cardHeader !== undefined ? <Card.Footer className="text-muted">{this.props.cardFooter}</Card.Footer> :null}
                </Card>
            </>
        );
    }
}