const Sequelize = require('sequelize');

const sequelize = new Sequelize('srvsys', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const Model = Sequelize.Model;

/*
    
    class Anonymous extends Model {}

    Anonymous.init({
        uuid: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize, 
        modelName: 'anonymous'
    });
    
*/

// defined anonymous

class Anonymous extends Model {}

Anonymous.init({
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ip: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.ENUM('online', 'offline'),
        defaultValue: 'offline'
    },
    visited: {
        type: Sequelize.BIGINT(13),
        allowNull: false
    },
    lastSaw: {
        type: Sequelize.BIGINT(13),
        allowNull: false
    },
    scretKey: {
        type: Sequelize.STRING,
        allowNull: true
    },
    mac: {
        type: Sequelize.STRING,
        allowNull: true
    },
    chats: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]'
    }
}, {
    sequelize,
    modelName: 'anonymous',
    tableName: 'anonymous'
});

// defined empolyee

class Employee extends Model {}

Employee.init({
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    loginToken:{
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.ENUM('available', 'invailable', 'pending'),
        defaultValue: 'pending'
    },
    joinedAt: {
        type: Sequelize.BIGINT(13),
        allowNull: false
    },
    lastLoginedAt: {
        type: Sequelize.BIGINT(13),
        allowNull: false
    },
    loginDevice: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'client'
    },
    loginIp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    group: {
        type: Sequelize.STRING,
        allowNull: false
    },
    useDefaultReply: {
        type: Sequelize.ENUM('y', 'n'),
        defaultValue: 'n'
    },
    automaticReply: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]'
    },
    quickReply: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]'
    },
    chats: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]'
    }
}, {
    sequelize,
    modelName: 'employee',
    tableName: 'employee'
});


// defined group

class Group extends Model {}

Group.init({
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quickReply: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]'
    },
}, {
    sequelize,
    modelName: 'group',
    tableName: 'group'
});


// defined thread
// undestandard like a chating room but one to one only

class Thread extends Model {}

Thread.init({
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'close'),
        defaultValue: 'open'
    },
    date: {
        type: Sequelize.BIGINT(13),
        allowNull: false
    },
    anonymous: {
        type: Sequelize.STRING,
        allowNull: false
    },
    employee: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]'
    },
    transitHistory: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]'
    },
}, {
    sequelize,
    modelName: 'thread',
    tableName: 'thread'
});


// defined message

class Message extends Model {}

Message.init({
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    form: {
        type: Sequelize.STRING,
        allowNull: false
    },
    to: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.BIGINT(13),
        allowNull: false
    },
    attachment: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]'
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '[]'
    },
}, {
    sequelize,
    modelName: 'message',
    tableName: 'message'
});


// defined asset

class Asset extends Model {}

Asset.init({
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fileName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cover: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.BIGINT(13),
        allowNull: false
    },
    fileSize: {
        type: Sequelize.STRING,
        allowNull: false
    },
    size: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
    },
    time: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
    },
    decoration: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    form: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'asset',
    tableName: 'asset'
});


// defined backup

class Backup extends Model {}

Backup.init({
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fileName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.BIGINT(13),
        allowNull: false
    },
    anonymous: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    employees: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
}, {
    sequelize,
    modelName: 'backup',
    tableName: 'backup'
});

// defined system
// system history, chat deal, chat transit and employee management

class History extends Model {}

Backup.init({
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.BIGINT(13),
        allowNull: false
    },
    event: {
        type: Sequelize.STRING,
        allowNull: false
    },
    by: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'history',
    tableName: 'history'
});


(async () => {

    await sequelize.sync({
        force: true
    });

})();