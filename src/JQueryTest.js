import $ from 'jquery';
import React, { useEffect } from 'react';

import banana from './images/images.jpeg';
import sedBanana from './images/images (1).jpeg';
import beatlesBanana from './images/images (2).jpeg';
import bananaArt from './images/images.png';
import searchIcon from './images/searchIcon.png';

import {
    Page
} from './styles/JQueryTestStyles';

window.jquery = window.$ = $;

const JQueryTest = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if($){
            $('#card-wrapper1').on('click', () =>{
                $('#1').fadeToggle();
            });
            $('#card-wrapper2').on('click', () =>{
                $('#2').slideToggle();
            });
            $('#card-wrapper3').on('click', () =>{
                $('#3').fadeToggle();
            });
            $('#card-wrapper4').on('click', () =>{
                $('#4').fadeToggle();
            });
            $('#card-wrapper5').on('click', () =>{
                $('#5').fadeToggle();
            });
            $('#card-wrapper6').on('click', () =>{
                $('#6').fadeToggle();
            });

            $('#search-wrapper').on('click', () => {
                $('#search-input').slideToggle();
            });
          }
    }, []);

    return (
        <Page>
            <div style={{ display: 'flex', flexDirection:'row', alignItems: 'center' }}>
                <input id='search-input' />
                <div id='search-wrapper'>
                    <img src={searchIcon} alt='search icon'/>
                </div>
            </div>
            <div style={{ marginBottom: '25px' }}>Shopping Page</div>
            <div id="cards-container" style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                margin: '25px'
            }}>
                <div style={{width: '200px', marginBottom: '50px'}} id='card-wrapper1'>
                    <div style={{backgroundColor: 'gray', fontSize: '20px', color: 'white'}}>content header</div>
                    <div id='1'>
                        <img 
                            src={banana}
                            width='200px'
                            alt="banana" />
                        hello, i'm card content
                    </div>
                </div>
                <div style={{width: '200px', marginBottom: '50px'}} id='card-wrapper2'>
                    <div style={{backgroundColor: 'gray', fontSize: '20px', color: 'white'}}>content header</div>
                    <div id='2'>
                        <img src={sedBanana}
                        alt="banana" />
                        hello, i'm card content
                    </div>
                </div>
                <div style={{width: '200px', marginBottom: '50px'}} id='card-wrapper3'>
                    <div style={{backgroundColor: 'gray', fontSize: '20px', color: 'white'}}>content header</div>
                    <div id='3'>
                        <img 
                            src={beatlesBanana}
                            width='200px' 
                            alt="beatles on banana" />
                        hello, i'm card content
                    </div>
                </div>
                <div style={{width: '200px', marginBottom: '50px'}} id='card-wrapper4'>
                    <div style={{backgroundColor: 'gray', fontSize: '20px', color: 'white'}}>content header</div>
                    <div id='4'>
                        <img 
                            src={bananaArt} 
                            width='200px'
                            alt="bananaArt" />
                        hello, i'm card content
                    </div>
                </div>
                <div style={{width: '200px', marginBottom: '50px'}} id='card-wrapper5'>
                    <div style={{backgroundColor: 'gray', fontSize: '20px', color: 'white'}}>content header</div>
                    <div id='5'>
                        <img 
                            src={sedBanana}
                            height='250px'
                            alt="sedBanana" />
                        hello, i'm card content
                    </div>
                </div>
                <div style={{width: '200px', marginBottom: '50px'}} id='card-wrapper6'>
                    <div style={{backgroundColor: 'gray', fontSize: '20px', color: 'white'}}>content header</div>
                    <div id='6'>
                        <img 
                            src={banana} 
                            width='200px'
                            alt="banana" />
                        hello, i'm card content
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default JQueryTest;
