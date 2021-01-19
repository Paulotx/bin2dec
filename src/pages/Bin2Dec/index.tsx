import React, { useCallback, useState } from 'react';
import Input from '../../components/Input';

import {
    Container,
    Content,
    Title,
    Instruction,
    Information,
    Error,
    Result,
    Footer,
} from './styles';

const Bin2Dec: React.FC = () => {
    const [isBinary, setIsBinary] = useState(true);
    const [decimal, setDecimal] = useState('');

    const convertDecimal = useCallback((binaryNumber: string) => {
        let decimalNumber = 0;
        const regexIsBinary = /[^01]/;

        if (regexIsBinary.test(binaryNumber)) {
            setIsBinary(false);
            setDecimal('');
        } else if (binaryNumber === '') {
            setDecimal('');
        } else {
            setIsBinary(true);
            binaryNumber
                .split('')
                .reverse()
                .forEach((item, index) => {
                    if (Number(item) !== 0) {
                        decimalNumber += 2 ** index;
                    }
                });

            setDecimal(String(decimalNumber));
        }
    }, []);

    return (
        <Container>
            <Content>
                <Title>Bin2Dec</Title>
                <Instruction>
                    Insira um{' '}
                    <a
                        href="https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_bin%C3%A1rio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        número binário
                    </a>{' '}
                    e obtenha uma conversão{' '}
                    <a
                        href="https://pt.wikipedia.org/wiki/N%C3%BAmero_decimal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        decimal
                    </a>
                </Instruction>
                <Input onChange={event => convertDecimal(event.target.value)} />
                <Information>
                    {!isBinary && (
                        <Error>
                            Você inseriu um número não binário (Insira apenas 0
                            ou 1)
                        </Error>
                    )}
                </Information>
                <Result>{decimal}</Result>
            </Content>

            <Footer>
                Desenvolvido por{' '}
                <a
                    href="https://github.com/Paulotx"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Paulo André
                </a>
            </Footer>
        </Container>
    );
};

export default Bin2Dec;
