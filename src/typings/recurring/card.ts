/**
 * Adyen Recurring API
 * The Recurring APIs allow you to manage and remove your tokens or saved payment details. Tokens should be created with validation during a payment request.  For more information, refer to our [Tokenization documentation](https://docs.adyen.com/online-payments/tokenization). ## Authentication To connect to the Recurring API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/development-resources/api-credentials). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Recurring API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Recurring/v49/disable ```
 *
 * The version of the OpenAPI document: 49
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class Card {
    /**
    * The [card verification code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid) (1-20 characters). Depending on the card brand, it is known also as: * CVV2/CVC2 – length: 3 digits * CID – length: 4 digits > If you are using [Client-Side Encryption](https://docs.adyen.com/classic-integration/cse-integration-ecommerce), the CVC code is present in the encrypted data. You must never post the card details to the server. > This field must be always present in a [one-click payment request](https://docs.adyen.com/classic-integration/recurring-payments). > When this value is returned in a response, it is always empty because it is not stored.
    */
    'cvc'?: string;
    /**
    * The card expiry month. Format: 2 digits, zero-padded for single digits. For example: * 03 = March * 11 = November
    */
    'expiryMonth': string;
    /**
    * The card expiry year. Format: 4 digits. For example: 2020
    */
    'expiryYear': string;
    /**
    * The name of the cardholder, as printed on the card.
    */
    'holderName': string;
    /**
    * The issue number of the card (for some UK debit cards only).
    */
    'issueNumber'?: string;
    /**
    * The card number (4-19 characters). Do not use any separators. When this value is returned in a response, only the last 4 digits of the card number are returned.
    */
    'number': string;
    /**
    * The month component of the start date (for some UK debit cards only).
    */
    'startMonth'?: string;
    /**
    * The year component of the start date (for some UK debit cards only).
    */
    'startYear'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cvc",
            "baseName": "cvc",
            "type": "string"
        },
        {
            "name": "expiryMonth",
            "baseName": "expiryMonth",
            "type": "string"
        },
        {
            "name": "expiryYear",
            "baseName": "expiryYear",
            "type": "string"
        },
        {
            "name": "holderName",
            "baseName": "holderName",
            "type": "string"
        },
        {
            "name": "issueNumber",
            "baseName": "issueNumber",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "startMonth",
            "baseName": "startMonth",
            "type": "string"
        },
        {
            "name": "startYear",
            "baseName": "startYear",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }
}

