// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: dogVeterinary.proto

package org.example;

public final class DogVeterinary {
  private DogVeterinary() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_DogVeterinaryRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_DogVeterinaryRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_DogVeterinaryResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_DogVeterinaryResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\023dogVeterinary.proto\"\\\n\024DogVeterinaryRe" +
      "quest\022\017\n\007dogName\030\001 \001(\t\022\r\n\005dogId\030\002 \001(\t\022\017\n" +
      "\007ownerId\030\003 \001(\t\022\023\n\013dateOfCheck\030\004 \001(\t\"(\n\025D" +
      "ogVeterinaryResponse\022\017\n\007message\030\001 \001(\t2U\n" +
      "\024DogVeterinaryService\022=\n\nGetFeature\022\025.Do" +
      "gVeterinaryRequest\032\026.DogVeterinaryRespon" +
      "se\"\000B\017\n\013org.exampleP\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_DogVeterinaryRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_DogVeterinaryRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_DogVeterinaryRequest_descriptor,
        new java.lang.String[] { "DogName", "DogId", "OwnerId", "DateOfCheck", });
    internal_static_DogVeterinaryResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_DogVeterinaryResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_DogVeterinaryResponse_descriptor,
        new java.lang.String[] { "Message", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
