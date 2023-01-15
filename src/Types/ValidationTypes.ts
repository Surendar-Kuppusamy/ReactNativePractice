import validator from 'validator';

export type ValidationTypes = {
	required?: string;
    email?: string;
    password?: string;
};

export type CustomValidationTypes = {
    email: ValidationTypes,
    password: ValidationTypes
};

export type CustomValidationTypes1 = {
    first: ValidationTypes,
    last: ValidationTypes
};

export type AllFormValidations = CustomValidationTypes | CustomValidationTypes1;

export type formStateTypes = {
    email: string;
    password: string;
}

export const FormValidationObj 	=	{
    'email': { 'required': 'Email Required', 'email': 'Invalid email' },
    'password': { 'required': 'Password Required', 'password': 'Password must be strong' }
};


export async function validateValues(formValues: formStateTypes, validations: AllFormValidations) {
    return new Promise(async(res, rej) => {

        let validationStatus    =   { status: "success", message: "" };

        try {

            const fieldNames        =   await Object.keys(validations);

            //console.log(" Started validation ");

            for await (const fieldName of fieldNames) {
                const validationNames   =   await Object.keys(validations[fieldName as keyof AllFormValidations]);
                for await (const validationName of validationNames) {
                    //console.log("Validation Name =>", validationName);
                    if(validationName === 'required') {
                        if(!(formValues[fieldName as keyof formStateTypes] !== '')) {
                            validationStatus["status"]  =   "error";
                            validationStatus["message"] =   validations[fieldName as keyof AllFormValidations][validationName] || '';
                        }
                    } else if(validationName === 'email') {
                        if(!validator.isEmail(formValues[fieldName as keyof formStateTypes])) {
                            validationStatus["status"]  =   "error";
                            validationStatus["message"] =   validations[fieldName as keyof AllFormValidations][validationName] || '';
                        }
                    } else if(validationName === 'password') {
                        if(!validator.isStrongPassword(formValues[fieldName as keyof formStateTypes], { minLength: 8, minLowercase: 1, minUppercase: 1, minSymbols: 1 })) {
                            validationStatus["status"]  =   "error";
                            validationStatus["message"] =   validations[fieldName as keyof AllFormValidations][validationName] || '';
                        }
                    }
                }
            }

            //console.log(" Ended validation ");

            return res(validationStatus);
            
        } catch(e: any) {
            validationStatus["status"]  =   "error";
            validationStatus["message"] =   e.message;
            return res(validationStatus);
        }
    });
}