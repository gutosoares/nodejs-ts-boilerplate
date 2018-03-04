"use strict";
/**
 * @api {get} /realties - Lista todos os imóveis
 * @apiName getAllRealties
 * @apiGroup Realties
 * @apiVersion  1.0.0
 */
/**
 * @api {get} /:id - Lista um imóveis
 * @apiName getSingleRealty
 * @apiGroup Realties
 * @apiParam {String} id - ID do imóvel desejado
 * @apiVersion  1.0.0
 */
/**
 * @api {patch} /update/:id - Atualiza um imóveis pelo ID
 * @apiName updateRealty
 * @apiGroup Realties
 * @apiParam {String} id - ID do imóvel desejado
 * @apiVersion  1.0.0
 */
/**
 * @api {post} / Cria um imóveis
 *
 * @apiParam{String}   id                    ID do imóvel.
 * @apiParam{String}   name                  Nome do imóvel.
 * @apiParam{String}   description           Descrição do imóvel.
 * @apiParam{String}   price                 Preço.
 * @apiParam{Number}   beds                  Número de quartos.
 * @apiParam{Number}   bath                  Número de banheiros.
 * @apiParam{Number}   suite                 Número de suites.
 * @apiParam{Object}   address               Endereço.
 * @apiParam{String}   address.zip           Zip code.
 * @apiParam{String}   address.street        Nome da rua.
 * @apiParam{String}   address.number        Número.
 * @apiParam{String}   address.city          Cidade.
 *
 * @apiName createRealty
 * @apiGroup Realties
 * @apiVersion  1.0.0
 */
/**
 * @api {delete} /:id - Deletar um imóveis pelo ID
 * @apiName deleteRealty
 * @apiGroup Realties
 * @apiParam {String} id - ID do imóvel desejado a ser removido
 * @apiVersion  1.0.0
 */
