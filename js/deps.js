// This file was autogenerated by calcdeps.py
goog.addDependency("../../../ydn-db/js/conn.js", [], ['ydn.db', 'ydn.db.con.Storage', 'goog.async.Deferred', 'ydn.base', 'ydn.db.events.StorageEvent']);
goog.addDependency("../../../ydn-db/js/core.js", [], ['ydn.db.core.Storage', 'ydn.db.core.DbOperator', 'ydn.db', 'ydn.db.events.RecordEvent', 'ydn.db.events.StoreEvent']);
goog.addDependency("../../../ydn-db/js/core_main.js", [], ['ydn.db.core.Storage']);
goog.addDependency("../../../ydn-db/js/dev.js", [], ['ydn.debug', 'ydn.db.con.Storage']);
goog.addDependency("../../../ydn-db/js/index.js", [], ['ydn.db.index.Storage', 'ydn.db.index.DbOperator', 'ydn.db.index.req.IDBCursor', 'ydn.math.Expression']);
goog.addDependency("../../../ydn-db/js/main.js", [], ['ydn.db.Storage', 'ydn.db.algo.NestedLoop', 'ydn.db.algo.ZigzagMerge', 'ydn.db.algo.SortedMerge']);
goog.addDependency("../../../ydn-db/js/rich.js", [], ['ydn.db.rich.Storage']);
goog.addDependency("../../../ydn-db/js/sql.js", [], ['ydn.db.sql.Storage', 'ydn.db.sql.DbOperator']);
goog.addDependency("../../../ydn-db/js/test.js", [], ['ydn.db.Storage', 'goog.debug.Console']);
goog.addDependency("../../../ydn-db/js/tr.js", [], ['ydn.db.tr.Storage', 'ydn.db.tr.DbOperator']);
goog.addDependency("../../../ydn-db/js/ydn/db/storage.js", ['ydn.db.Storage'], ['ydn.db.sql.Storage']);
goog.addDependency("../../../ydn-db/js/ydn/db/algo/abstract_solver.js", ['ydn.db.algo.AbstractSolver'], ['goog.debug.Logger', 'ydn.db.Streamer', 'ydn.db']);
goog.addDependency("../../../ydn-db/js/ydn/db/algo/algo.js", ['ydn.db.algo'], ['ydn.db.algo.NestedLoop', 'ydn.db.algo.SortedMerge', 'ydn.db.algo.ZigzagMerge']);
goog.addDependency("../../../ydn-db/js/ydn/db/algo/nested_loop.js", ['ydn.db.algo.NestedLoop'], ['ydn.db.algo.AbstractSolver']);
goog.addDependency("../../../ydn-db/js/ydn/db/algo/sorted_merge.js", ['ydn.db.algo.SortedMerge'], ['ydn.db.algo.AbstractSolver', 'ydn.db']);
goog.addDependency("../../../ydn-db/js/ydn/db/algo/zigzag_merge.js", ['ydn.db.algo.ZigzagMerge'], ['ydn.db']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/base.js", ['ydn.db.base'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/db.js", ['ydn.db'], ['ydn.db.con.IndexedDb', 'ydn.db.con.WebSql', 'ydn.db.utils']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/editable_schema.js", ['ydn.db.schema.EditableDatabase'], ['ydn.db.schema.Database']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/error.js", ['ydn.db.InternalError', 'ydn.db.InvalidKeyException', 'ydn.db.InvalidStateError', 'ydn.db.NotFoundError', 'ydn.db.ScopeError', 'ydn.db.SecurityError'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/events.js", ['ydn.db.events.StoreEvent', 'ydn.db.events.StorageEvent', 'ydn.db.events.RecordEvent', 'ydn.db.events.Types'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/key.js", ['ydn.db.Key'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/key_range.js", ['ydn.db.IDBKeyRange', 'ydn.db.KeyRange'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/schema.js", ['ydn.db.schema.DataType', 'ydn.db.schema.Database', 'ydn.db.schema.Index', 'ydn.db.schema.Store'], ['ydn.db.base', 'ydn.db.Key', 'ydn.db.utils']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/utils.js", ['ydn.db.utils'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/where.js", ['ydn.db.Where'], ['ydn.db.KeyRange', 'goog.string', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/i_database.js", ['ydn.db.con.IDatabase'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/i_storage.js", ['ydn.db.con.IStorage'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/indexed_db.js", ['ydn.db.con.IndexedDb'], ['goog.Timer', 'goog.async.DeferredList', 'goog.events', 'ydn.async', 'ydn.db.base', 'ydn.db.con.IDatabase', 'ydn.db.schema.Database', 'ydn.error.ConstrainError', 'ydn.json']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/memory_storage.js", ['ydn.db.req.InMemoryStorage'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/simple_storage.js", ['ydn.db.con.SimpleStorage'], ['goog.Timer', 'goog.asserts', 'goog.async.Deferred', 'ydn.db.Key', 'ydn.db.con.IDatabase', 'ydn.db.req.InMemoryStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/storage.js", ['ydn.db.con.Storage'], ['goog.events.EventTarget', 'goog.userAgent.product', 'ydn.async', 'ydn.db.con.IStorage', 'ydn.db.con.IndexedDb', 'ydn.db.con.LocalStorage', 'ydn.db.con.SessionStorage', 'ydn.db.con.SimpleStorage', 'ydn.db.con.WebSql', 'ydn.db.events.StorageEvent', 'ydn.db.schema.EditableDatabase', 'ydn.debug.error.ArgumentException', 'ydn.object']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/web_storage.js", ['ydn.db.con.LocalStorage', 'ydn.db.con.SessionStorage'], ['ydn.db.con.SimpleStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/websql.js", ['ydn.db.con.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.events', 'goog.functions', 'ydn.async', 'ydn.db.SecurityError', 'ydn.db.base', 'ydn.db.con.IDatabase', 'ydn.json', 'ydn.string']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/i_cursor.js", ['ydn.db.ICursor'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/core/i_operator.js", ['ydn.db.core.IOperator'], ['ydn.db.req.RequestExecutor', 'ydn.db.KeyRange']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/i_value_cursor.js", ['ydn.db.IValueCursor'], ['ydn.db.ICursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/idb_cursor.js", ['ydn.db.IDBCursor'], ['ydn.db.ICursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/idb_value_cursor.js", ['ydn.db.IDBValueCursor'], ['ydn.db.IValueCursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/operator.js", ['ydn.db.core.DbOperator'], ['ydn.db.core.req.IndexedDb', 'ydn.db.core.req.SimpleStore', 'ydn.db.core.req.WebSql', 'ydn.db.tr.AtomicSerial', 'ydn.db.tr.IThread', 'ydn.db.core.IOperator', 'ydn.db.tr.DbOperator', 'ydn.error.NotSupportedException', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/storage.js", ['ydn.db.core.Storage'], ['goog.userAgent.product', 'ydn.async', 'ydn.db.core.IOperator', 'ydn.db.core.DbOperator', 'ydn.db.tr.Storage', 'ydn.object']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/websql_cursor.js", ['ydn.db.WebsqlCursor'], ['ydn.db.IValueCursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/req/i_request_executor.js", ['ydn.db.core.req.IRequestExecutor'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/core/req/indexed_db.js", ['ydn.db.core.req.IndexedDb'], ['goog.async.DeferredList', 'ydn.db.core.req.IRequestExecutor', 'ydn.db.req.RequestExecutor', 'ydn.error', 'ydn.json']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/req/request_executor.js", ['ydn.db.req.RequestExecutor'], ['goog.async.Deferred', 'goog.debug.Logger', 'ydn.db.InternalError', 'ydn.db.Key']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/req/simple_store.js", ['ydn.db.core.req.SimpleStore'], ['goog.Timer', 'goog.asserts', 'goog.async.Deferred', 'ydn.db.req.RequestExecutor', 'ydn.db.core.req.IRequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/req/websql.js", ['ydn.db.core.req.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.events', 'ydn.async', 'ydn.db.req.RequestExecutor', 'ydn.json', 'ydn.db.Where', 'ydn.db.core.req.IRequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/i_cursor_stream.js", ['ydn.db.con.ICursorStream'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/index/i_operator.js", ['ydn.db.index.IOperator'], ['ydn.db.index.req.IRequestExecutor', 'ydn.db.core.IOperator']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/idb_cursor_stream.js", ['ydn.db.con.IdbCursorStream'], ['goog.debug.Logger', 'ydn.db.con.ICursorStream', 'ydn.db.con.IStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/iterator.js", ['ydn.db.Iterator', 'ydn.db.KeyCursors', 'ydn.db.ValueCursors', 'ydn.db.Cursors', 'ydn.db.IndexValueCursors', 'ydn.db.Iterator.State'], ['goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.db.base', 'ydn.db.index.req.ICursor', 'ydn.debug.error.ArgumentException', 'ydn.debug.error.ArgumentException', 'goog.debug.Logger']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/operator.js", ['ydn.db.index.DbOperator'], ['ydn.db.Iterator', 'ydn.db.core.DbOperator', 'ydn.db.index.req.IRequestExecutor', 'ydn.db.index.req.IndexedDb', 'ydn.db.index.req.WebSql', 'ydn.db.index.req.SimpleStore', 'ydn.db.index.IOperator', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/storage.js", ['ydn.db.index.Storage'], ['ydn.db.index.DbOperator', 'ydn.db.core.Storage']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/streamer.js", ['ydn.db.Streamer'], ['ydn.db.con.IdbCursorStream', 'ydn.db.con.IStorage', 'ydn.db.Iterator', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/abstract_cursor.js", ['ydn.db.index.req.AbstractCursor'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/i_cursor.js", ['ydn.db.index.req.ICursor'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/i_request_executor.js", ['ydn.db.index.req.IRequestExecutor'], ['ydn.db.core.req.IRequestExecutor', 'ydn.db.Streamer', 'ydn.db.index.req.AbstractCursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/idb_cursor.js", ['ydn.db.index.req.IDBCursor'], ['ydn.db.index.req.AbstractCursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/indexed_db.js", ['ydn.db.index.req.IndexedDb'], ['ydn.db.core.req.IndexedDb', 'ydn.db.index.req.IRequestExecutor', 'ydn.db.algo.AbstractSolver', 'ydn.db.IDBCursor', 'ydn.db.IDBValueCursor', 'ydn.db.index.req.IDBCursor', 'ydn.error', 'ydn.json']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/simple_store.js", ['ydn.db.index.req.SimpleStore'], ['ydn.db.core.req.SimpleStore', 'ydn.db.index.req.IRequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/websql.js", ['ydn.db.index.req.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.events', 'ydn.async', 'ydn.db.WebsqlCursor', 'ydn.json', 'ydn.db.index.req.IRequestExecutor', 'ydn.db.index.req.WebsqlCursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/websql_cursor.js", ['ydn.db.index.req.WebsqlCursor'], ['ydn.db.index.req.AbstractCursor', 'ydn.db.index.req.ICursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/rich/rich_storage.js", ['ydn.db.rich.RichStorage'], ['goog.storage.EncryptedStorage', 'goog.storage.ExpiringStorage', 'goog.asserts']);
goog.addDependency("../../../ydn-db/js/ydn/db/rich/storage.js", ['ydn.db.rich.Storage'], ['ydn.db.core.Storage', 'ydn.db.rich.RichStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/rich/tx_storage.js", ['ydn.db.rich.TxQueue'], ['ydn.db.sql.DbOperator', 'ydn.db.algo', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/i_storage.js", ['ydn.db.sql.IStorage'], ['ydn.db.sql.req.IRequestExecutor', 'ydn.db.index.IOperator']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/operator.js", ['ydn.db.sql.DbOperator'], ['ydn.db.Iterator', 'ydn.db.index.DbOperator', 'ydn.db.sql.IStorage', 'ydn.db.sql.req.IRequestExecutor', 'ydn.db.sql.req.IndexedDb', 'ydn.db.sql.req.WebSql', 'ydn.db.sql.req.SimpleStore']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/sql.js", ['ydn.db.Sql'], ['goog.functions', 'ydn.db.KeyRange', 'ydn.db.schema.Database', 'ydn.error.ArgumentException', 'ydn.db.sql.req.IdbQuery', 'ydn.math.Expression', 'ydn.db.Where', 'ydn.string']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/storage.js", ['ydn.db.sql.Storage'], ['ydn.db.sql.DbOperator', 'ydn.db.index.Storage']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/i_request_executor.js", ['ydn.db.sql.req.IRequestExecutor'], ['ydn.db.core.req.IRequestExecutor', 'ydn.db.Streamer', 'ydn.db.Sql']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/idb_query.js", ['ydn.db.sql.req.IdbQuery'], ['ydn.db.sql.req.IterableQuery', 'goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/indexed_db.js", ['ydn.db.sql.req.IndexedDb'], ['ydn.db.index.req.IndexedDb', 'ydn.db.sql.req.IRequestExecutor', 'ydn.db.sql.req.idb.Node', 'ydn.db.sql.req.idb.ReduceNode']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/iterable_query.js", ['ydn.db.sql.req.IterableQuery'], ['ydn.db.Iterator', 'goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/simple_store.js", ['ydn.db.sql.req.SimpleStore'], ['ydn.db.index.req.SimpleStore', 'ydn.db.sql.req.IRequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/sql_old.js", ['ydn.db.Sql_'], ['goog.functions', 'ydn.db.KeyRange', 'ydn.db.schema.Database', 'ydn.error.ArgumentException', 'ydn.db.sql.req.IdbQuery', 'ydn.math.Expression', 'ydn.string']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/sql_query.js", ['ydn.db.sql.req.SqlQuery'], ['ydn.db.sql.req.IterableQuery', 'goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/websql.js", ['ydn.db.sql.req.WebSql'], ['ydn.db.index.req.WebSql', 'ydn.db.sql.req.SqlQuery', 'ydn.db.sql.req.IRequestExecutor', 'ydn.db.sql.req.websql.Node', 'ydn.db.sql.req.websql.ReduceNode']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/idb/node.js", ['ydn.db.sql.req.idb.Node'], ['ydn.db.Iterator', 'ydn.db.KeyRange', 'ydn.db.Sql', 'ydn.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/idb/reduce_node.js", ['ydn.db.sql.req.idb.ReduceNode'], ['ydn.db.sql.req.idb.Node', 'ydn.object']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/websql/node.js", ['ydn.db.sql.req.websql.Node'], ['ydn.db.schema.Store', 'ydn.db.Sql']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/req/websql/reduce_node.js", ['ydn.db.sql.req.websql.ReduceNode'], ['ydn.db.sql.req.websql.Node', 'ydn.object']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/atomic_serial.js", ['ydn.db.tr.AtomicSerial'], ['ydn.db.tr.IThread', 'ydn.db.tr.Serial', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/i_storage.js", ['ydn.db.tr.IStorage'], ['ydn.db.tr.Mutex']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/i_thread.js", ['ydn.db.tr.IThread', 'ydn.db.tr.IThread.Threads'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/mutex.js", ['ydn.db.tr.Mutex'], ['goog.array', 'goog.asserts', 'ydn.db.InvalidStateError']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/operator.js", ['ydn.db.tr.DbOperator'], ['ydn.db.tr.AtomicSerial', 'ydn.db.tr.IThread', 'ydn.db.core.IOperator', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/overflow_serial.js", ['ydn.db.tr.OverflowSerial'], ['ydn.db.tr.IThread', 'ydn.db.tr.Serial', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/parallel.js", ['ydn.db.tr.ParallelThread'], ['ydn.db.tr.IThread', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/serial.js", ['ydn.db.tr.Serial'], ['ydn.db.tr.IThread', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/single.js", ['ydn.db.tr.Single'], ['ydn.db.tr.IThread', 'ydn.db.tr.ParallelThread', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/storage.js", ['ydn.db.tr.Storage'], ['ydn.db.con.Storage', 'ydn.db.tr.DbOperator', 'ydn.db.tr.IStorage', 'ydn.db.tr.AtomicSerial', 'ydn.db.tr.ParallelThread', 'ydn.db.tr.IThread.Threads', 'ydn.db.tr.Single']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/strict_overflow_serial.js", ['ydn.db.tr.StrictOverflowSerial'], ['ydn.db.tr.IThread', 'ydn.db.tr.Serial', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/utils/reader.js", ['ydn.db.io.Reader'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/utils/test_utils.js", ['ydn.db.test'], ['ydn.db.io.QueryService']);
