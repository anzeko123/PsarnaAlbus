package org.example;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.54.1)",
    comments = "Source: dogVeterinary.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class DogVeterinaryServiceGrpc {

  private DogVeterinaryServiceGrpc() {}

  public static final String SERVICE_NAME = "DogVeterinaryService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<org.example.DogVeterinaryRequest,
      org.example.DogVeterinaryResponse> getGetFeatureMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetFeature",
      requestType = org.example.DogVeterinaryRequest.class,
      responseType = org.example.DogVeterinaryResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<org.example.DogVeterinaryRequest,
      org.example.DogVeterinaryResponse> getGetFeatureMethod() {
    io.grpc.MethodDescriptor<org.example.DogVeterinaryRequest, org.example.DogVeterinaryResponse> getGetFeatureMethod;
    if ((getGetFeatureMethod = DogVeterinaryServiceGrpc.getGetFeatureMethod) == null) {
      synchronized (DogVeterinaryServiceGrpc.class) {
        if ((getGetFeatureMethod = DogVeterinaryServiceGrpc.getGetFeatureMethod) == null) {
          DogVeterinaryServiceGrpc.getGetFeatureMethod = getGetFeatureMethod =
              io.grpc.MethodDescriptor.<org.example.DogVeterinaryRequest, org.example.DogVeterinaryResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetFeature"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.example.DogVeterinaryRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.example.DogVeterinaryResponse.getDefaultInstance()))
              .setSchemaDescriptor(new DogVeterinaryServiceMethodDescriptorSupplier("GetFeature"))
              .build();
        }
      }
    }
    return getGetFeatureMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static DogVeterinaryServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<DogVeterinaryServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<DogVeterinaryServiceStub>() {
        @java.lang.Override
        public DogVeterinaryServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new DogVeterinaryServiceStub(channel, callOptions);
        }
      };
    return DogVeterinaryServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static DogVeterinaryServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<DogVeterinaryServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<DogVeterinaryServiceBlockingStub>() {
        @java.lang.Override
        public DogVeterinaryServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new DogVeterinaryServiceBlockingStub(channel, callOptions);
        }
      };
    return DogVeterinaryServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static DogVeterinaryServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<DogVeterinaryServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<DogVeterinaryServiceFutureStub>() {
        @java.lang.Override
        public DogVeterinaryServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new DogVeterinaryServiceFutureStub(channel, callOptions);
        }
      };
    return DogVeterinaryServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void getFeature(org.example.DogVeterinaryRequest request,
        io.grpc.stub.StreamObserver<org.example.DogVeterinaryResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetFeatureMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service DogVeterinaryService.
   */
  public static abstract class DogVeterinaryServiceImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return DogVeterinaryServiceGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service DogVeterinaryService.
   */
  public static final class DogVeterinaryServiceStub
      extends io.grpc.stub.AbstractAsyncStub<DogVeterinaryServiceStub> {
    private DogVeterinaryServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DogVeterinaryServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new DogVeterinaryServiceStub(channel, callOptions);
    }

    /**
     */
    public void getFeature(org.example.DogVeterinaryRequest request,
        io.grpc.stub.StreamObserver<org.example.DogVeterinaryResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetFeatureMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service DogVeterinaryService.
   */
  public static final class DogVeterinaryServiceBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<DogVeterinaryServiceBlockingStub> {
    private DogVeterinaryServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DogVeterinaryServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new DogVeterinaryServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public org.example.DogVeterinaryResponse getFeature(org.example.DogVeterinaryRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetFeatureMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service DogVeterinaryService.
   */
  public static final class DogVeterinaryServiceFutureStub
      extends io.grpc.stub.AbstractFutureStub<DogVeterinaryServiceFutureStub> {
    private DogVeterinaryServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DogVeterinaryServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new DogVeterinaryServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<org.example.DogVeterinaryResponse> getFeature(
        org.example.DogVeterinaryRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetFeatureMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_FEATURE = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AsyncService serviceImpl;
    private final int methodId;

    MethodHandlers(AsyncService serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_FEATURE:
          serviceImpl.getFeature((org.example.DogVeterinaryRequest) request,
              (io.grpc.stub.StreamObserver<org.example.DogVeterinaryResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  public static final io.grpc.ServerServiceDefinition bindService(AsyncService service) {
    return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
        .addMethod(
          getGetFeatureMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              org.example.DogVeterinaryRequest,
              org.example.DogVeterinaryResponse>(
                service, METHODID_GET_FEATURE)))
        .build();
  }

  private static abstract class DogVeterinaryServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    DogVeterinaryServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return org.example.DogVeterinary.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("DogVeterinaryService");
    }
  }

  private static final class DogVeterinaryServiceFileDescriptorSupplier
      extends DogVeterinaryServiceBaseDescriptorSupplier {
    DogVeterinaryServiceFileDescriptorSupplier() {}
  }

  private static final class DogVeterinaryServiceMethodDescriptorSupplier
      extends DogVeterinaryServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    DogVeterinaryServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (DogVeterinaryServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new DogVeterinaryServiceFileDescriptorSupplier())
              .addMethod(getGetFeatureMethod())
              .build();
        }
      }
    }
    return result;
  }
}
