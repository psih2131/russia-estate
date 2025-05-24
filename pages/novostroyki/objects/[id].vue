<template>
    <main class="main" v-if="object_data_single">
       
        <section class="single-object-front-sec">
            <div class="single-object-container">

                <nav class="single-object-front-sec__breadcrumbs object-breadcrumbs" aria-label="breadcrumb">
                    <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="object-breadcrumbs__list">
                        
                        <li itemprop="itemListElement" class="object-breadcrumbs__item" itemscope itemtype="https://schema.org/ListItem">
                            <a href="/" itemprop="item">
                                <span itemprop="name">Главная -</span>
                            </a>
                            <meta itemprop="position" content="1" />
                        </li>

                        <li itemprop="itemListElement" class="object-breadcrumbs__item" itemscope itemtype="https://schema.org/ListItem">
                            <a href="/katalog" itemprop="item">
                                <span itemprop="name">Новостройки -</span>
                            </a>
                            <meta itemprop="position" content="2" />
                        </li>

                        <li itemprop="itemListElement" class="object-breadcrumbs__item object-breadcrumbs__item_current" itemscope itemtype="https://schema.org/ListItem">
                            <span itemprop="name">{{ object_data_single[0].title.rendered }}</span>
                            <meta itemprop="position" content="3" />
                        </li>
                    </ol>
                </nav>

                <div class="single-object-front-sec__info-container">
                    <template v-if="object_data_single[0].acf.osnovnoe_izobrazhenie_vnutri_obekta && object_data_single[0].acf.osnovnoe_izobrazhenie_vnutri_obekta.url" >
                        <img :src="object_data_single[0].acf.osnovnoe_izobrazhenie_vnutri_obekta.url"  alt="" class="single-object-front-sec__bg-img">
                    </template>

                    <div class="single-object-front-sec__info-wrapper">
                        <div class="single-object-front-sec__info-row">
                            <div class="single-object-front-sec__info-left">
                                <h2 class="single-object-front-sec__info-title">ЖК «Элитный квартал Тишинский бульвар»</h2>
                                <div class="single-object-front-sec__info-adress">
                                    <div class="object-element__location">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C7.6 2 4 5.6 4 10C4 15.4 11 21.5 11.3 21.8C11.5 21.9 11.8 22 12 22C12.2 22 12.5 21.9 12.7 21.8C13 21.5 20 15.4 20 10C20 5.6 16.4 2 12 2ZM12 19.7C9.9 17.7 6 13.4 6 10C6 6.7 8.7 4 12 4C15.3 4 18 6.7 18 10C18 13.3 14.1 17.7 12 19.7ZM12 6C9.8 6 8 7.8 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 7.8 14.2 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill="white"/>
                                        </svg>

                                            
                                        <p class="object-element__location-text">{{cutText(object_data_single[0].acf.adres)}}</p>
                                    </div>

                                    <button class="object-element__location-btn btn-v1-small">Показать на карте</button>
                                </div>
                            </div>
                            <div class="single-object-front-sec__info-right">
                                <div class="single-object-front-sec__info-price"><span>от</span> {{ object_data_single[0].acf.stoimost_kvartir_ot }} <b>₽</b></div>
                                <div class="single-object-front-sec__info-right-brn-wrapper">
                                    <button class="single-object-front-sec__btn btn-v2">Скачать презинтацию</button>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div class="single-object-front-sec__characteristics">
                    <div class="single-object-front-sec__characteristics-element" v-if="object_data_single[0].acf.kvadratura_kvartir_ot && object_data_single[0].acf.kvadratura_kvartir_do">
                        <div class="single-object-front-sec__characteristics-element-icon-wrapper">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6894 21.75L8.25 9.31065V13.5H6.75V6.75H13.5V8.25H9.31065L21.75 20.6894V16.5H23.25V23.25H16.5V21.75H20.6894Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 27V3H27V27H3ZM4.5 4.5H25.5V25.5H4.5V4.5Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="single-object-front-sec__characteristics-element-data-wrapper">
                            <p class="single-object-front-sec__characteristics-element-title">Площадь квартир</p>
                            <p class="single-object-front-sec__characteristics-element-value">от <b>{{object_data_single[0].acf.kvadratura_kvartir_ot}}</b> кв<span>²</span> до <b>{{object_data_single[0].acf.kvadratura_kvartir_do}}</b> кв<span>²</span></p>
                        </div>
                    </div>


                    <div class="single-object-front-sec__characteristics-element" v-if="object_data_single[0].acf.status_doma">
                        <div class="single-object-front-sec__characteristics-element-icon-wrapper">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.375 18.75C22.4105 18.75 23.25 17.9105 23.25 16.875C23.25 15.8395 22.4105 15 21.375 15C20.3395 15 19.5 15.8395 19.5 16.875C19.5 17.9105 20.3395 18.75 21.375 18.75Z" stroke="white" stroke-width="2"/>
                            <path d="M14.25 8.25C15.0784 8.25 15.75 7.57843 15.75 6.75C15.75 5.92157 15.0784 5.25 14.25 5.25C13.4216 5.25 12.75 5.92157 12.75 6.75C12.75 7.57843 13.4216 8.25 14.25 8.25Z" stroke="white" stroke-width="2"/>
                            <path d="M27 15.75L21.375 11.25L15.75 15.75V27H27V15.75Z" stroke="white" stroke-width="2"/>
                            <path d="M8.60197 9.39397L9.13252 9.92407L9.47767 9.5787L9.3015 9.1233L8.60197 9.39397ZM11.6048 12.3975L11.8756 11.6981L11.4203 11.5218L11.0748 11.8669L11.6048 12.3975ZM3 15L2.46948 14.4698L2.25 14.6895V15H3ZM3 18H2.25V18.75H3V18ZM6 18V18.75H6.31066L6.53033 18.5303L6 18ZM7.5 16.5L8.03032 17.0303L8.25 16.8106V16.5H7.5ZM7.5 14.25V13.5H6.75V14.25H7.5ZM9.75 14.25V15H10.0603L10.28 14.7807L9.75 14.25ZM18 7.5C18 9.98527 15.9853 12 13.5 12V13.5C16.8137 13.5 19.5 10.8137 19.5 7.5H18ZM9 7.5C9 5.01472 11.0147 3 13.5 3V1.5C10.1863 1.5 7.5 4.18629 7.5 7.5H9ZM13.5 3C15.9853 3 18 5.01472 18 7.5H19.5C19.5 4.18629 16.8137 1.5 13.5 1.5V3ZM9.3015 9.1233C9.10702 8.62072 9 8.07375 9 7.5H7.5C7.5 8.26177 7.64235 8.99212 7.90252 9.66457L9.3015 9.1233ZM13.5 12C12.9259 12 12.3785 11.8928 11.8756 11.6981L11.334 13.0969C12.0069 13.3575 12.7377 13.5 13.5 13.5V12ZM2.25 15V18H3.75V15H2.25ZM3 18.75H6V17.25H3V18.75ZM6.53033 18.5303L8.03032 17.0303L6.96967 15.9697L5.46967 17.4697L6.53033 18.5303ZM8.25 16.5V14.25H6.75V16.5H8.25ZM7.5 15H9.75V13.5H7.5V15ZM8.0715 8.8638L2.46948 14.4698L3.53052 15.5302L9.13252 9.92407L8.0715 8.8638ZM11.0748 11.8669L9.21997 13.7193L10.28 14.7807L12.1348 12.9282L11.0748 11.8669Z" fill="white"/>
                            <path d="M17.6251 6C16.9249 6 16.2562 6.12759 15.6399 6.36013L15.1104 4.9567C15.8934 4.66129 16.7413 4.5 17.6251 4.5C21.5602 4.5 24.7501 7.68998 24.7501 11.625C24.7501 12.3564 24.6399 13.0621 24.4352 13.7264L23.1487 12.694C23.2153 12.3479 23.2501 11.9905 23.2501 11.625C23.2501 8.51843 20.7318 6 17.6251 6Z" fill="white"/>
                            <path d="M19.8334 17.8774L20.0785 18.3165C19.3136 18.597 18.4874 18.7501 17.6253 18.7501C15.0747 18.7501 12.8378 17.4093 11.5801 15.3977L12.6832 14.3135C12.8374 14.5963 13.0152 14.8645 13.2139 15.1153C14.2451 16.4168 15.8381 17.2501 17.6253 17.2501C18.3012 17.2501 18.9492 17.1309 19.5495 16.9124L19.8334 17.8774Z" fill="white"/>
                            </svg>

                        </div>
                        <div class="single-object-front-sec__characteristics-element-data-wrapper">
                            <p class="single-object-front-sec__characteristics-element-title">Статус обьекта</p>
                            <p class="single-object-front-sec__characteristics-element-value"><b>{{object_data_single[0].acf.status_doma}}</b></p>
                        </div>
                    </div>

                    <div class="single-object-front-sec__characteristics-element" v-if="object_data_single[0].acf.etazhnost">
                        <div class="single-object-front-sec__characteristics-element-icon-wrapper">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3H3.75V9.42L12.75 14.9205V13.1625L5.25 8.58V4.5H10.5V7.5H15V10.5H21V9H16.5V6H12V3Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 12V15H14.25V18H9.75V21H4.5V27H12.9608L27 18.42V12H18.75ZM20.25 13.5H25.5V17.58L12.5392 25.5H6V22.5H11.25V19.5H15.75V16.5H20.25V13.5Z" fill="white"/>
                            </svg>

                        </div>
                        <div class="single-object-front-sec__characteristics-element-data-wrapper">
                            <p class="single-object-front-sec__characteristics-element-title">Этажность</p>
                            <p class="single-object-front-sec__characteristics-element-value"><b>{{object_data_single[0].acf.etazhnost}} этажей</b></p>
                        </div>
                    </div>

                    <div class="single-object-front-sec__characteristics-element" v-if="object_data_single[0].class_novostrojki[0]">
                        <div class="single-object-front-sec__characteristics-element-icon-wrapper">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2869 6.14408L12.5071 11.6416H6.75012L6.30762 12.9968L10.9681 16.3943L9.18762 21.8941L10.3426 22.7311L15.0001 19.3351L19.6576 22.7311L20.8126 21.8941L19.0321 16.3951L23.6919 12.9976L23.2501 11.6401H17.4931L15.7134 6.14258H14.2876L14.2869 6.14408ZM13.7664 12.6218L15.0001 8.81033L16.2339 12.6218C16.2827 12.7727 16.3781 12.9042 16.5064 12.9975C16.6347 13.0907 16.7893 13.1409 16.9479 13.1408H20.9484L17.7091 15.5033C17.5815 15.5965 17.4865 15.7275 17.4377 15.8778C17.389 16.0281 17.3889 16.19 17.4376 16.3403L18.6736 20.1578L15.4419 17.8013C15.3136 17.7078 15.1589 17.6574 15.0001 17.6574C14.8413 17.6574 14.6867 17.7078 14.5584 17.8013L11.3266 20.1578L12.5626 16.3403C12.6113 16.19 12.6113 16.0281 12.5625 15.8778C12.5138 15.7275 12.4188 15.5965 12.2911 15.5033L9.05112 13.1408H13.0524C13.211 13.1409 13.3655 13.0907 13.4938 12.9975C13.6221 12.9042 13.7175 12.7727 13.7664 12.6218Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.75 15C27.75 22.0417 22.0417 27.75 15 27.75C7.95825 27.75 2.25 22.0417 2.25 15C2.25 7.95825 7.95825 2.25 15 2.25C22.0417 2.25 27.75 7.95825 27.75 15ZM26.25 15C26.25 21.213 21.213 26.25 15 26.25C8.787 26.25 3.75 21.213 3.75 15C3.75 8.787 8.787 3.75 15 3.75C21.213 3.75 26.25 8.787 26.25 15Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="single-object-front-sec__characteristics-element-data-wrapper" >
                            <p class="single-object-front-sec__characteristics-element-title">Класс обьекта</p>
                            
                            <p class="single-object-front-sec__characteristics-element-value"><b>{{getCurrentClass(object_data_single[0].class_novostrojki)}}</b></p>
                        </div>
                    </div>

                    <div class="single-object-front-sec__characteristics-element" v-if="object_data_single[0].acf.tip_materiala">
                        <div class="single-object-front-sec__characteristics-element-icon-wrapper">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 24C11.4489 24 11.6397 23.921 11.7803 23.7803C11.921 23.6397 12 23.4489 12 23.25C12 23.0511 11.921 22.8603 11.7803 22.7197C11.6397 22.579 11.4489 22.5 11.25 22.5C11.0511 22.5 10.8603 22.579 10.7197 22.7197C10.579 22.8603 10.5 23.0511 10.5 23.25C10.5 23.4489 10.579 23.6397 10.7197 23.7803C10.8603 23.921 11.0511 24 11.25 24ZM18 23.25C18 23.4489 17.921 23.6397 17.7803 23.7803C17.6397 23.921 17.4489 24 17.25 24C17.0511 24 16.8603 23.921 16.7197 23.7803C16.579 23.6397 16.5 23.4489 16.5 23.25C16.5 23.0511 16.579 22.8603 16.7197 22.7197C16.8603 22.579 17.0511 22.5 17.25 22.5C17.4489 22.5 17.6397 22.579 17.7803 22.7197C17.921 22.8603 18 23.0511 18 23.25ZM23.25 24C23.4489 24 23.6397 23.921 23.7803 23.7803C23.921 23.6397 24 23.4489 24 23.25C24 23.0511 23.921 22.8603 23.7803 22.7197C23.6397 22.579 23.4489 22.5 23.25 22.5C23.0511 22.5 22.8603 22.579 22.7197 22.7197C22.579 22.8603 22.5 23.0511 22.5 23.25C22.5 23.4489 22.579 23.6397 22.7197 23.7803C22.8603 23.921 23.0511 24 23.25 24ZM15 20.25C15 20.4489 14.921 20.6397 14.7803 20.7803C14.6397 20.921 14.4489 21 14.25 21C14.0511 21 13.8603 20.921 13.7197 20.7803C13.579 20.6397 13.5 20.4489 13.5 20.25C13.5 20.0511 13.579 19.8603 13.7197 19.7197C13.8603 19.579 14.0511 19.5 14.25 19.5C14.4489 19.5 14.6397 19.579 14.7803 19.7197C14.921 19.8603 15 20.0511 15 20.25ZM20.25 21C20.4489 21 20.6397 20.921 20.7803 20.7803C20.921 20.6397 21 20.4489 21 20.25C21 20.0511 20.921 19.8603 20.7803 19.7197C20.6397 19.579 20.4489 19.5 20.25 19.5C20.0511 19.5 19.8603 19.579 19.7197 19.7197C19.579 19.8603 19.5 20.0511 19.5 20.25C19.5 20.4489 19.579 20.6397 19.7197 20.7803C19.8603 20.921 20.0511 21 20.25 21ZM18 17.25C18 17.4489 17.921 17.6397 17.7803 17.7803C17.6397 17.921 17.4489 18 17.25 18C17.0511 18 16.8603 17.921 16.7197 17.7803C16.579 17.6397 16.5 17.4489 16.5 17.25C16.5 17.0511 16.579 16.8603 16.7197 16.7197C16.8603 16.579 17.0511 16.5 17.25 16.5C17.4489 16.5 17.6397 16.579 17.7803 16.7197C17.921 16.8603 18 17.0511 18 17.25ZM23.25 18C23.4489 18 23.6397 17.921 23.7803 17.7803C23.921 17.6397 24 17.4489 24 17.25C24 17.0511 23.921 16.8603 23.7803 16.7197C23.6397 16.579 23.4489 16.5 23.25 16.5C23.0511 16.5 22.8603 16.579 22.7197 16.7197C22.579 16.8603 22.5 17.0511 22.5 17.25C22.5 17.4489 22.579 17.6397 22.7197 17.7803C22.8603 17.921 23.0511 18 23.25 18ZM21 14.25C21 14.4489 20.921 14.6397 20.7803 14.7803C20.6397 14.921 20.4489 15 20.25 15C20.0511 15 19.8603 14.921 19.7197 14.7803C19.579 14.6397 19.5 14.4489 19.5 14.25C19.5 14.0511 19.579 13.8603 19.7197 13.7197C19.8603 13.579 20.0511 13.5 20.25 13.5C20.4489 13.5 20.6397 13.579 20.7803 13.7197C20.921 13.8603 21 14.0511 21 14.25ZM23.25 12C23.4489 12 23.6397 11.921 23.7803 11.7803C23.921 11.6397 24 11.4489 24 11.25C24 11.0511 23.921 10.8603 23.7803 10.7197C23.6397 10.579 23.4489 10.5 23.25 10.5C23.0511 10.5 22.8603 10.579 22.7197 10.7197C22.579 10.8603 22.5 11.0511 22.5 11.25C22.5 11.4489 22.579 11.6397 22.7197 11.7803C22.8603 11.921 23.0511 12 23.25 12Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H27V27H3V3ZM4.5 24.4395V19.5H9.4395L4.5 24.4395ZM25.5 25.5H5.5605L25.5 5.5605V25.5ZM13.5 4.5H24.4395L18.4395 10.5H13.5V4.5ZM4.5 4.5H12V10.5H4.5V4.5ZM4.5 18V12H7.5V18H4.5ZM10.9395 18L16.9395 12H9V18H10.9395Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="single-object-front-sec__characteristics-element-data-wrapper" >
                            <p class="single-object-front-sec__characteristics-element-title">Тип материала</p>
                            <p class="single-object-front-sec__characteristics-element-value single-object-front-sec__characteristics-element-value_type"><b>{{object_data_single[0].acf.tip_materiala}}</b></p>
                        </div>
                    </div>

                </div>
               
            </div>
        </section>
        
        <section class="single-object-description-sec">
            <div class="single-object-container">
                <p class="single-object-description-sec__title">О жилом комплексе «Береговой»</p>
                <div class="single-object-description-sec__text-container ">

                    <div class="single-object-description-sec__text" 
                    ref="textEditorWrapper"
                    :class="{'single-object-description-sec__text_activ': openStatusText}">
                        <div class="single-object-description-sec__text-editor wp-editor" ref="textEditor" v-html="object_data_single[0].acf.osnovnoe_tekstovoe_opisanie">
                            
                        </div>
                    </div>
                    

                    <div class="single-object-description-sec__text-btn-row">
                        <button class="btn-v1 single-object-description-sec__text-btn" 
                        :class="{'single-object-description-sec__text-btn_activ': openStatusText}" 
                        @click="openText">
                            Читать подробнее
                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.23013 0.21967C0.536971 -0.0732233 1.03446 -0.0732233 1.3413 0.21967L5.5 4.18934L9.6587 0.21967C9.96554 -0.0732233 10.463 -0.0732233 10.7699 0.21967C11.0767 0.512563 11.0767 0.987437 10.7699 1.28033L6.05558 5.78033C5.74874 6.07322 5.25126 6.07322 4.94442 5.78033L0.23013 1.28033C-0.0767101 0.987437 -0.0767101 0.512563 0.23013 0.21967Z" fill="white"/>
                            </svg>

                        </button>
                    </div>
                    

                </div>
            </div>
        </section>



        <section class="single-object-characteristics-sec">
            <div class="single-object-container">
                <h2 class="single-object-characteristics-sec__title single-object-title-v1">Основные характеристики</h2>
                <div class="single-object-characteristics-sec__row">
                    <div class="single-object-characteristics-sec__cluster">
                        <ul class="single-object-characteristics-sec__cluster-list characteristics-cluster-list">
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].class_novostrojki[0]">
                                <span class="characteristics-cluster-list__item-name">Класс недвижимости</span>
                                <span class="characteristics-cluster-list__item-value">{{getCurrentClass(object_data_single[0].class_novostrojki)}}</span>
                            </li>

                            <template v-if="object_data_single[0].acf.status_doma">
                                <li class="characteristics-cluster-list__item" 
                                v-if="object_data_single[0].acf.status_doma != 'Дом сдан' && object_data_single[0].acf.srok_sdachi_obekta">
                                    <span class="characteristics-cluster-list__item-name">Срок сдачи</span>
                                    <span class="characteristics-cluster-list__item-value">{{object_data_single[0].acf.srok_sdachi_obekta}}</span>
                                </li>

                                <li class="characteristics-cluster-list__item" v-else>
                                    <span class="characteristics-cluster-list__item-name">Статус обьекта:</span>
                                    <span class="characteristics-cluster-list__item-value" v-if="object_data_single[0].acf.status_doma">{{object_data_single[0].acf.status_doma}}</span>
                                    <span class="characteristics-cluster-list__item-value" v-else>-</span>
                                </li>

                            </template>
                            
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.etazhnost">
                                <span class="characteristics-cluster-list__item-name">Этажность</span>
                                <span class="characteristics-cluster-list__item-value">{{object_data_single[0].acf.etazhnost}}</span>
                            </li>
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.kolichestvo_korpusov">
                                <span class="characteristics-cluster-list__item-name">Количество корпусов:</span>
                                <span class="characteristics-cluster-list__item-value">{{object_data_single[0].acf.kolichestvo_korpusov}}</span>
                            </li>
                            <li class="characteristics-cluster-list__item">
                                <span class="characteristics-cluster-list__item-name">Застройщик</span>
                                <span class="characteristics-cluster-list__item-value">
                                    <a v-for="item in object_data_single[0].acf.zastrojshhik" :key="item"  class="characteristics-cluster-list__item-link">
                                        {{ item.post_title }}
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>


                    <div class="single-object-characteristics-sec__cluster">
                        <ul class="single-object-characteristics-sec__cluster-list characteristics-cluster-list">
                            <li class="characteristics-cluster-list__item" 
                            v-if="object_data_single[0].acf.kvadratura_kvartir_ot && object_data_single[0].acf.kvadratura_kvartir_do">
                                <span class="characteristics-cluster-list__item-name">Площадь квартир</span>
                                <span class="characteristics-cluster-list__item-value">от {{object_data_single[0].acf.kvadratura_kvartir_ot}} кв<b>²</b> до {{ object_data_single[0].acf.kvadratura_kvartir_do }} кв<b>²</b></span>
                            </li>
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.vysota_potolkov">
                                <span class="characteristics-cluster-list__item-name">Высота потолков</span>
                                <span class="characteristics-cluster-list__item-value">{{ object_data_single[0].acf.vysota_potolkov }} м</span>
                            </li>
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.nalichie_lifta">
                                <span class="characteristics-cluster-list__item-name">Наличие лифта</span>
                                <span class="characteristics-cluster-list__item-value">{{object_data_single[0].acf.nalichie_lifta}}</span>
                            </li>
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.tip_materiala">
                                <span class="characteristics-cluster-list__item-name">Тип стен</span>
                                <span class="characteristics-cluster-list__item-value">{{object_data_single[0].acf.tip_materiala}}</span>
                            </li>
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.otdelka_kvartir">
                                <span class="characteristics-cluster-list__item-name">Отделка квартир</span>
                                <span class="characteristics-cluster-list__item-value">
                                   {{ object_data_single[0].acf.otdelka_kvartir }}
                                </span>
                            </li>
                        </ul>
                    </div>


                    <div class="single-object-characteristics-sec__cluster">
                        <ul class="single-object-characteristics-sec__cluster-list characteristics-cluster-list">
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.blagoustrojstvo">
                                <span class="characteristics-cluster-list__item-name">Благоустройство</span>
                                <span class="characteristics-cluster-list__item-value characteristics-cluster-list__item-value--small-text">
                                    {{ object_data_single[0].acf.blagoustrojstvo }}
                                </span>
                            </li>
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.ohrana_i_dostup">
                                <span class="characteristics-cluster-list__item-name">Охрана и доступ</span>
                                <span class="characteristics-cluster-list__item-value characteristics-cluster-list__item-value--small-text">
                                    {{ object_data_single[0].acf.ohrana_i_dostup }}
                                </span>
                            </li>
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.blizhajshee_metro">
                                <span class="characteristics-cluster-list__item-name">Ближайшее метро</span>
                                <span class="characteristics-cluster-list__item-value">
                                    {{ object_data_single[0].acf.blizhajshee_metro }}
                                </span>
                            </li>
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.parkovka">
                                <span class="characteristics-cluster-list__item-name">Парковка</span>
                                <span class="characteristics-cluster-list__item-value">
                                    {{ object_data_single[0].acf.parkovka }}
                                </span>
                            </li>
                            <li class="characteristics-cluster-list__item" v-if="object_data_single[0].acf.detskij_sad_shkola">
                                <span class="characteristics-cluster-list__item-name">Детский сад / школа</span>
                                <span class="characteristics-cluster-list__item-value">
                                    {{ object_data_single[0].acf.detskij_sad_shkola }}
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>



        <section class="single-object-apartments-layout-sec">
            <div class="single-object-container">
                <h2 class="single-object-apartments-layout-sec__title single-object-title-v1">Типы планировок</h2>
                <div class="single-object-apartments-layout-sec__slider-wrapper">


                    <!-- render only for server -->
                    <div class="apartments-layout-server" v-if="clientStatus == false">
                        <div class="apartments-layout-slider__item" v-for="item in object_data_single[0].acf.planirovki_kvartir" :key="item">
                            <div class="apartments-layout-slider__item-wrapper" ref="itemWrappers">
                                <div class="apartments-layout-slider__item-header">
                                    <p class="apartments-layout-slider__item-title">{{item.title_project}}</p>
                                    <div class="apartments-layout-slider__item-sale" v-if="item.sale">{{item.sale}}%</div>
                                </div>
                                <div class="apartments-layout-slider__item-plan-wrapper">
                                    <img :src="item.plan_img.url" :alt="item.plan_img.alt"  class="apartments-layout-slider__item-plan">
                                </div>
                                <div class="apartments-layout-slider__item-dop-info">
                                    <div class="apartments-layout-slider__item-dop-row">
                                        <p class="apartments-layout-slider__item-type-name">{{item.plan_title}}</p>
                                        <div class="apartments-layout-slider__item-price-wrapper">
                                            <p class="apartments-layout-slider__item-current-price" v-if="item.price_current_rub">
                                                {{item.price_current_rub}} ₽
                                            </p>
                                            <p class="apartments-layout-slider__item-old-price" v-if="item.price_old_rub">
                                                {{item.price_old_rub}} ₽
                                            </p>
                                        </div>
                                    </div>

                                    <div class="apartments-layout-slider__item-dop-info-string" v-if="item.plan_dop_info && item.plan_dop_info.length > 0">
                                        <p class="apartments-layout-slider__item-dop-info-string-value" 
                                        v-for="element in item.plan_dop_info" :key="element">
                                        {{ element.text }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- render only for client -->
                    <ClientOnly>
                    <swiper-container 
                    ref="apartmentsRef" 
                    class="apartments-layout-slider"
                    :pagination="{
                    dynamicBullets: true,
                    clickable: true
                    }"

                    :navigation="{
                        enabled: true,
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next'
                    }"
                    >
                        <swiper-slide v-for="item in object_data_single[0].acf.planirovki_kvartir" :key="item">

                            <div class="apartments-layout-slider__item">
                                <div class="apartments-layout-slider__item-wrapper" ref="itemWrappers">
                                    <div class="apartments-layout-slider__item-header">
                                        <p class="apartments-layout-slider__item-title">{{item.title_project}}</p>
                                        <div class="apartments-layout-slider__item-sale" v-if="item.sale">{{item.sale}}%</div>
                                    </div>
                                    <div class="apartments-layout-slider__item-plan-wrapper">
                                        <img :src="item.plan_img.url" :alt="item.plan_img.alt"  class="apartments-layout-slider__item-plan">
                                    </div>
                                    <div class="apartments-layout-slider__item-dop-info">
                                        <div class="apartments-layout-slider__item-dop-row">
                                            <p class="apartments-layout-slider__item-type-name">{{item.plan_title}}</p>
                                            <div class="apartments-layout-slider__item-price-wrapper">
                                                <p class="apartments-layout-slider__item-current-price" v-if="item.price_current_rub">
                                                    {{item.price_current_rub}} ₽
                                                </p>
                                                <p class="apartments-layout-slider__item-old-price" v-if="item.price_old_rub">
                                                    {{item.price_old_rub}} ₽
                                                </p>
                                            </div>
                                        </div>

                                        <div class="apartments-layout-slider__item-dop-info-string" v-if="item.plan_dop_info && item.plan_dop_info.length > 0">
                                            <p class="apartments-layout-slider__item-dop-info-string-value" 
                                            v-for="element in item.plan_dop_info" :key="element">
                                            {{ element.text }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </swiper-slide>

                    </swiper-container>
                    
                    </ClientOnly>

                    <div class="swiper-button-prev custom-nav" >
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.15429 13.7071C8.53841 13.3166 8.53841 12.6834 8.15429 12.2929L2.94817 7L8.15429 1.70711C8.53841 1.31658 8.53841 0.683417 8.15429 0.292893C7.77017 -0.0976315 7.14738 -0.0976315 6.76326 0.292893L0.861622 6.29289C0.4775 6.68342 0.4775 7.31658 0.861622 7.70711L6.76326 13.7071C7.14738 14.0976 7.77017 14.0976 8.15429 13.7071Z" fill="#5D736E"/>
                        </svg>
                    </div>
                    <div class="swiper-button-next custom-nav" >
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.845709 13.7071C0.461587 13.3166 0.461587 12.6834 0.845709 12.2929L6.05183 7L0.845708 1.70711C0.461586 1.31658 0.461586 0.683417 0.845708 0.292893C1.22983 -0.0976315 1.85262 -0.0976315 2.23674 0.292893L8.13838 6.29289C8.5225 6.68342 8.5225 7.31658 8.13838 7.70711L2.23674 13.7071C1.85262 14.0976 1.22983 14.0976 0.845709 13.7071Z" fill="#5D736E"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>



        <section class="single-object-gallery-sec">
            <div class="single-object-container">
                <div class="single-object-gallery-sec__title-row">
                    <h2 class="single-object-gallery-sec__title single-object-title-v1">Дизайн и внешний вид</h2>
                    <p class="single-object-gallery-sec__description" 
                    v-if="object_data_single[0].acf.dizajn_i_vneshnij_vid_tekst"
                    v-html="object_data_single[0].acf.dizajn_i_vneshnij_vid_tekst"></p>
                </div>
            </div>
        </section>
        
        
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
               single object ({{ route.params.id }})<br><br>
        
    </main>
    
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'


import { ref, onMounted, onBeforeUnmount, computed, watch,   } from 'vue';

const route = useRoute()

const store = useCounterStore()

console.log(route.params.id)

const { data: object_data_single } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/novostrojki?slug=${route.params.id}`)

const { data: all_class } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/class_novostrojki`)

const openStatusText = ref(false)

const textEditor = ref(null)

const textEditorWrapper = ref(null)

const apartmentsRef = ref(null)

const itemWrappers = ref([]);

const clientStatus = ref(false)


console.log(object_data_single)


//methods

//slider apart layout settings
const swiperApartLayout = useSwiper(apartmentsRef, {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 0,
   autoplay: {
    delay: 1000,
  },
})


function getCurrentClass(item){
    let currentItem = item[0]
    let currentValue
    if(currentItem){
        let res = all_class.value.filter(function(elem) {
            if (elem.id == +currentItem) {
                return true;
            } else {
                return false;
            }
        });
        currentValue = res[0].name
    }
    else{
        currentValue = null
    }

    return currentValue;
}

//cut location string
function cutText(text) {
  const limit = 50
  if (!text) return ''
  return text.length > limit ? text.slice(0, limit) + '...' : text
}

//open full text wrapper
function openText(){
    openStatusText.value = !openStatusText.value
    
    let textHeight = textEditor.value.offsetHeight
    console.log(textHeight)

    if(openStatusText.value == true){
        textEditorWrapper.value.style.height = +textHeight + 'px'
    }
    else{
        textEditorWrapper.value.style.height = '550px'
    }

}

  console.log(process)

//HOOKS
onMounted(async () => {
  await nextTick(); // Ждём полной отрисовки DOM

  // Сбросим текущие высоты (если нужно повторно вызывать)
  itemWrappers.value.forEach((el) => {
    el.style.height = 'auto';
  });

  // Найдём максимальную высоту
  const maxHeight = Math.max(...itemWrappers.value.map(el => el.offsetHeight));

  // Установим всем одинаковую высоту
  itemWrappers.value.forEach((el) => {
    el.style.height = `${maxHeight}px`;
  });


  clientStatus.value = true
  console.log(swiperApartLayout.instance)

  console.log(process)

});


onBeforeUnmount(() => {

});



 // props
 const props = defineProps({
//   mainData: Object,
      // postAllCategory: Object,
  })
</script>