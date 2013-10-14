/**
 * @fileoverview Exports for ydn-db CRUD module.
 *
 */


goog.provide('ydn.db.Storages');
goog.require('ydn.db.con.exports');
goog.require('ydn.db.crud.Storage');
goog.require('ydn.db.crud.exports');
goog.require('ydn.db.crud.Storage');
goog.require('ydn.db.crud.req.IndexedDb');
goog.require('ydn.db.crud.req.WebSql');



/**
 * Create a suitable storage mechanism from indexdb, to websql to
 * localStorage.
 *
 * If database name and schema are provided, this will immediately initialize
 * the database and ready to use. However if any of these two are missing,
 * the database is not initialize until they are set by calling
 * {@link #setName} and {@link #setSchema}.
 * @see goog.db Google Closure Library DB module.
 * @param {string=} opt_dbname database name.
 * @param {(ydn.db.schema.Database|!DatabaseSchema)=} opt_schema database
 * schema
 * or its configuration in JSON format. If not provided, default empty schema
 * is used.
 * @param {!StorageOptions=} opt_options options.
 * @extends {ydn.db.crud.Storage}
 * @constructor *
 */
ydn.db.Storages = function(opt_dbname, opt_schema, opt_options) {
  goog.base(this, opt_dbname, opt_schema, opt_options);

};
goog.inherits(ydn.db.Storages, ydn.db.crud.Storage);


goog.exportSymbol('ydn.db.Storage', ydn.db.Storages);


/**
 * @param {string} db_name
 * @param {!ydn.db.schema.Database} schema
 * @param {string} type
 * @return {!ydn.db.crud.req.IRequestExecutor}
 */
ydn.db.crud.Storage.getExecutor = function(db_name, schema, type) {
  if (type == ydn.db.base.Mechanisms.IDB) {
    return new ydn.db.crud.req.IndexedDb(db_name, schema);
  } else if (type == ydn.db.base.Mechanisms.WEBSQL) {
    return new ydn.db.crud.req.WebSql(db_name, schema);
  } else {
    throw new ydn.debug.error.InternalError('No executor for ' + type);
  }
};
