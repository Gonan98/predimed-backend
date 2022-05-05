import AntecedentType from "./antecedent-type.model";
import Antecedent from "./antecedent.model";
import Department from "./department.model";
import DestinyService from "./destiny-service.model";
import Disease from "./disease.model";
import District from "./district.model";
import Establishment from "./establishment.model";
import History from "./history.model";
import Incidence from "./incidence.model";
import NoReferred from "./no-referred.model";
import Patient from "./patient.model";
import Province from "./province.model";
import Referred from "./referred.model";
import Service from "./service.model";
import Specialty from "./specialty.model";
import Symptom from "./symptom.model";
import User from "./user.model";

User.hasMany(Incidence);
Incidence.belongsTo(User);
User.hasMany(Referred);
Referred.belongsTo(User);
User.hasMany(NoReferred);
NoReferred.belongsTo(User);

Establishment.belongsToMany(Specialty, { through: 'establishtment_specialties' });
Specialty.belongsToMany(Establishment, { through: 'establishtment_specialties' });
Establishment.belongsToMany(Service, { through: 'establishment_services' });
Service.belongsToMany(Establishment, { through: 'establishment_services' });
Establishment.belongsToMany(DestinyService, { through: 'establishment_destiny_services' });
DestinyService.belongsToMany(Establishment, { through: 'establishment_destiny_services' });
Establishment.hasMany(User);
User.belongsTo(Establishment);
Establishment.hasMany(Referred, {
    foreignKey: {
        name: 'sourceEstablishmentCode',
        allowNull: false
    }
});
Referred.belongsTo(Establishment, {
    foreignKey: {
        name: 'sourceEstablishmentCode',
        allowNull: false
    }
})
Establishment.hasMany(Referred, {
    foreignKey: {
        name: 'destinyEstablishmentCode',
        allowNull: false
    }
});
Referred.belongsTo(Establishment, {
    foreignKey: {
        name: 'destinyEstablishmentCode',
        allowNull: false
    }
})

DestinyService.hasMany(Referred);
Referred.belongsTo(DestinyService);

Service.hasMany(Referred);
Referred.belongsTo(Service);

Specialty.hasMany(Referred);
Referred.belongsTo(Specialty);

Department.hasMany(Province, {
    foreignKey: {
        name: 'departmentId',
        allowNull: false
    }
});
Province.belongsTo(Department, {
    foreignKey: {
        name: 'departmentId',
        allowNull: false
    }
});
Department.hasMany(District, {
    foreignKey: {
        name: 'departmentId',
        allowNull: false
    }
});
District.belongsTo(Department, {
    foreignKey: {
        name: 'departmentId',
        allowNull: false
    }
});

Province.hasMany(District, {
    foreignKey: {
        name: 'provinceId',
        allowNull: false
    }
});
District.belongsTo(Province, {
    foreignKey: {
        name: 'provinceId',
        allowNull: false
    }
});

District.hasMany(Establishment, {
    foreignKey: {
        name: 'ubigeoId',
        allowNull: false
    }
});
Establishment.belongsTo(District, {
    foreignKey: {
        name: 'ubigeoId',
        allowNull: false
    }
});
District.hasMany(Patient, {
    foreignKey: {
        name: 'ubigeoId',
        allowNull: false
    }
});
Patient.belongsTo(District, {
    foreignKey: {
        name: 'ubigeoId',
        allowNull: false
    }
});

Patient.hasMany(Referred);
Referred.belongsTo(Patient);
Patient.hasMany(NoReferred);
NoReferred.belongsTo(Patient);
Patient.hasMany(History, {
    foreignKey: {
        allowNull: false
    }
});
History.belongsTo(Patient, {
    foreignKey: {
        allowNull: false
    }
});
Patient.hasMany(Antecedent, {
    foreignKey: {
        allowNull: false
    }
});
Antecedent.belongsTo(Patient, {
    foreignKey: {
        allowNull: false
    }
});

AntecedentType.hasMany(Antecedent, {
    foreignKey: {
        allowNull: false
    }
});
Antecedent.belongsTo(AntecedentType, {
    foreignKey: {
        allowNull: false
    }
});

Symptom.belongsToMany(Referred, { through: 'referred_patient_symptopms' });
Referred.belongsToMany(Symptom, { through: 'referred_patient_symptopms' });
Symptom.belongsToMany(NoReferred, { through: 'no_referred_patient_symptopms' });
NoReferred.belongsToMany(Symptom, { through: 'no_referred_patient_symptopms' });

Disease.hasMany(Referred);
Referred.belongsTo(Disease);