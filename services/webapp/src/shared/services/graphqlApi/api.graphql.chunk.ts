export default "schema {\n  query: Query\n  mutation: ApiMutation\n  subscription: ApiSubscription\n}\n\ntype ApiMutation {\n  updateCurrentUser(input: UpdateCurrentUserMutationInput!): UpdateCurrentUserMutationPayload\n  tokenAuth(input: ObtainTokenMutationInput!): ObtainTokenMutationPayload\n  signUp(input: SingUpMutationInput!): SingUpMutationPayload\n  updateNotification(input: UpdateNotificationMutationInput!): UpdateNotificationMutationPayload\n  markReadAllNotifications(input: MarkReadAllNotificationsMutationInput!): MarkReadAllNotificationsMutationPayload\n  createCrudDemoItem(input: CreateCrudDemoItemMutationInput!): CreateCrudDemoItemMutationPayload\n  updateCrudDemoItem(input: UpdateCrudDemoItemMutationInput!): UpdateCrudDemoItemMutationPayload\n  deleteCrudDemoItem(input: DeleteCrudDemoItemMutationInput!): DeleteCrudDemoItemMutationPayload\n  createDocumentDemoItem(input: CreateDocumentDemoItemMutationInput!): CreateDocumentDemoItemMutationPayload\n  deleteDocumentDemoItem(input: DeleteDocumentDemoItemMutationInput!): DeleteDocumentDemoItemMutationPayload\n  createFavoriteContentfulDemoItem(input: CreateFavoriteContentfulDemoItemMutationInput!): CreateFavoriteContentfulDemoItemMutationPayload\n  deleteFavoriteContentfulDemoItem(input: DeleteFavoriteContentfulDemoItemMutationInput!): DeleteFavoriteContentfulDemoItemMutationPayload\n}\n\ntype ApiSubscription {\n  notificationCreated(before: String, after: String, first: Int, last: Int): NotificationConnection\n}\n\ntype ContentfulDemoItemFavoriteConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [ContentfulDemoItemFavoriteEdge]!\n}\n\n\"\"\"A Relay edge containing a `ContentfulDemoItemFavorite` and its cursor.\"\"\"\ntype ContentfulDemoItemFavoriteEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: ContentfulDemoItemFavoriteType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype ContentfulDemoItemFavoriteType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  item: ContentfulDemoItemType!\n  user: CurrentUserType!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype ContentfulDemoItemFavoriteTypeConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [ContentfulDemoItemFavoriteTypeEdge]!\n}\n\n\"\"\"\nA Relay edge containing a `ContentfulDemoItemFavoriteType` and its cursor.\n\"\"\"\ntype ContentfulDemoItemFavoriteTypeEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: ContentfulDemoItemFavoriteType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype ContentfulDemoItemType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  fields: JSONString!\n  isPublished: Boolean!\n  contentfuldemoitemfavoriteSet(offset: Int, before: String, after: String, first: Int, last: Int): ContentfulDemoItemFavoriteTypeConnection!\n  pk: String\n}\n\ninput CreateCrudDemoItemMutationInput {\n  name: String!\n  createdBy: String\n  clientMutationId: String\n}\n\ntype CreateCrudDemoItemMutationPayload {\n  crudDemoItem: CrudDemoItemType\n  crudDemoItemEdge: CrudDemoItemEdge\n  clientMutationId: String\n}\n\ninput CreateDocumentDemoItemMutationInput {\n  file: Upload\n  createdBy: String\n  clientMutationId: String\n}\n\ntype CreateDocumentDemoItemMutationPayload {\n  documentDemoItem: DocumentDemoItemType\n  documentDemoItemEdge: DocumentDemoItemEdge\n  clientMutationId: String\n}\n\ninput CreateFavoriteContentfulDemoItemMutationInput {\n  item: String!\n  user: String\n  clientMutationId: String\n}\n\ntype CreateFavoriteContentfulDemoItemMutationPayload {\n  contentfulDemoItemFavorite: ContentfulDemoItemFavoriteType\n  contentfulDemoItemFavoriteEdge: ContentfulDemoItemFavoriteEdge\n  clientMutationId: String\n}\n\ntype CrudDemoItemConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [CrudDemoItemEdge]!\n}\n\n\"\"\"A Relay edge containing a `CrudDemoItem` and its cursor.\"\"\"\ntype CrudDemoItemEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: CrudDemoItemType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype CrudDemoItemType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  name: String!\n  createdBy: CurrentUserType\n}\n\n\"\"\"A Relay edge containing a `CurrentUser` and its cursor.\"\"\"\ntype CurrentUserEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: UserProfileType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype CurrentUserType {\n  id: ID!\n  email: String!\n  firstName: String\n  lastName: String\n  roles: [String]\n  avatar: String\n}\n\n\"\"\"\nThe `DateTime` scalar type represents a DateTime\nvalue as specified by\n[iso8601](https://en.wikipedia.org/wiki/ISO_8601).\n\"\"\"\nscalar DateTime\n\ninput DeleteCrudDemoItemMutationInput {\n  id: String\n  clientMutationId: String\n}\n\ntype DeleteCrudDemoItemMutationPayload {\n  deletedIds: [ID]\n  clientMutationId: String\n}\n\ninput DeleteDocumentDemoItemMutationInput {\n  id: String\n  clientMutationId: String\n}\n\ntype DeleteDocumentDemoItemMutationPayload {\n  deletedIds: [ID]\n  clientMutationId: String\n}\n\ninput DeleteFavoriteContentfulDemoItemMutationInput {\n  item: String\n  clientMutationId: String\n}\n\ntype DeleteFavoriteContentfulDemoItemMutationPayload {\n  deletedIds: [ID]\n  clientMutationId: String\n}\n\ntype DocumentDemoItemConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [DocumentDemoItemEdge]!\n}\n\n\"\"\"A Relay edge containing a `DocumentDemoItem` and its cursor.\"\"\"\ntype DocumentDemoItemEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: DocumentDemoItemType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype DocumentDemoItemType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  file: FileFieldType\n  createdBy: CurrentUserType\n  createdAt: DateTime!\n}\n\ntype FileFieldType {\n  url: String\n  name: String\n}\n\n\"\"\"\nThe `GenericScalar` scalar type represents a generic\nGraphQL scalar value that could be:\nString, Boolean, Int, Float, List or Object.\n\"\"\"\nscalar GenericScalar\n\n\"\"\"\nAllows use of a JSON String for input / output from the GraphQL schema.\n\nUse of this type is *not recommended* as you lose the benefits of having a defined, static\nschema (one of the key benefits of GraphQL).\n\"\"\"\nscalar JSONString\n\ninput MarkReadAllNotificationsMutationInput {\n  clientMutationId: String\n}\n\ntype MarkReadAllNotificationsMutationPayload {\n  ok: Boolean\n  clientMutationId: String\n}\n\n\"\"\"An object with an ID\"\"\"\ninterface Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n}\n\ntype NotificationConnection {\n  \"\"\"Pagination data for this connection.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"Contains the nodes in this connection.\"\"\"\n  edges: [NotificationEdge]!\n}\n\n\"\"\"A Relay edge containing a `Notification` and its cursor.\"\"\"\ntype NotificationEdge {\n  \"\"\"The item at the end of the edge\"\"\"\n  node: NotificationType\n\n  \"\"\"A cursor for use in pagination\"\"\"\n  cursor: String!\n}\n\ntype NotificationType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  user: CurrentUserType!\n  type: String!\n  createdAt: DateTime!\n  readAt: DateTime\n  data: GenericScalar\n}\n\ninput ObtainTokenMutationInput {\n  email: String!\n  password: String!\n  clientMutationId: String\n}\n\ntype ObtainTokenMutationPayload {\n  access: String\n  refresh: String\n  clientMutationId: String\n}\n\n\"\"\"\nThe Relay compliant `PageInfo` type, containing data necessary to paginate this connection.\n\"\"\"\ntype PageInfo {\n  \"\"\"When paginating forwards, are there more items?\"\"\"\n  hasNextPage: Boolean!\n\n  \"\"\"When paginating backwards, are there more items?\"\"\"\n  hasPreviousPage: Boolean!\n\n  \"\"\"When paginating backwards, the cursor to continue.\"\"\"\n  startCursor: String\n\n  \"\"\"When paginating forwards, the cursor to continue.\"\"\"\n  endCursor: String\n}\n\ntype Query {\n  currentUser: CurrentUserType\n  hasUnreadNotifications: Boolean\n  allNotifications(before: String, after: String, first: Int, last: Int): NotificationConnection\n  crudDemoItem(\n    \"\"\"The ID of the object\"\"\"\n    id: ID!\n  ): CrudDemoItemType\n  allCrudDemoItems(before: String, after: String, first: Int, last: Int): CrudDemoItemConnection\n  allContentfulDemoItemFavorites(before: String, after: String, first: Int, last: Int): ContentfulDemoItemFavoriteConnection\n  allDocumentDemoItems(before: String, after: String, first: Int, last: Int): DocumentDemoItemConnection\n  node(\n    \"\"\"The ID of the object\"\"\"\n    id: ID!\n  ): Node\n}\n\ninput SingUpMutationInput {\n  id: String\n  email: String!\n  password: String!\n  clientMutationId: String\n}\n\ntype SingUpMutationPayload {\n  id: String\n  email: String\n  access: String\n  refresh: String\n  clientMutationId: String\n}\n\ninput UpdateCrudDemoItemMutationInput {\n  name: String!\n  createdBy: String\n  id: ID!\n  clientMutationId: String\n}\n\ntype UpdateCrudDemoItemMutationPayload {\n  crudDemoItem: CrudDemoItemType\n  crudDemoItemEdge: CrudDemoItemEdge\n  clientMutationId: String\n}\n\ninput UpdateCurrentUserMutationInput {\n  firstName: String\n  lastName: String\n  avatar: Upload\n  clientMutationId: String\n}\n\ntype UpdateCurrentUserMutationPayload {\n  userProfile: UserProfileType\n  userProfileEdge: CurrentUserEdge\n  clientMutationId: String\n}\n\ninput UpdateNotificationMutationInput {\n  isRead: Boolean\n  id: ID!\n  clientMutationId: String\n}\n\ntype UpdateNotificationMutationPayload {\n  notification: NotificationType\n  notificationEdge: NotificationEdge\n  hasUnreadNotifications: Boolean\n  clientMutationId: String\n}\n\n\"\"\"\nCreate scalar that ignores normal serialization/deserialization, since\nthat will be handled by the multipart request spec\n\"\"\"\nscalar Upload\n\ntype UserProfileType implements Node {\n  \"\"\"The ID of the object.\"\"\"\n  id: ID!\n  user: CurrentUserType!\n  firstName: String!\n  lastName: String!\n}\n\n"